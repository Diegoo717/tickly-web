import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export interface Message {
  id: string;
  userId: string;
  eventId: string;
  content: string;
  senderName: string;
  senderAvatar?: string;
  createdAt: string;
  isOwn?: boolean;
}

interface UseWebSocketProps {
  url: string;
  token: string | null;
  onConnect?: () => void;
  onDisconnect?: () => void;
  onError?: (error: any) => void;
}

export const useWebSocket = ({
  url,
  token,
  onConnect,
  onDisconnect,
  onError,
}: UseWebSocketProps) => {
  const socketRef = useRef<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [currentRoom, setCurrentRoom] = useState<string | null>(null);
  const tokenRef = useRef(token);

  useEffect(() => {
    tokenRef.current = token;
  }, [token]);

  useEffect(() => {
    if (!token) {
      return;
    }

    const socket = io(url, {
      auth: {
        token,
      },
      transports: ['websocket', 'polling'],
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      setIsConnected(true);
      onConnect?.();
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
      setCurrentRoom(null);
      onDisconnect?.();
    });

    socket.on('error', (error) => {
      console.error('WebSocket error:', error);
      onError?.(error);
    });

    socket.on('connect_error', (error) => {
      console.error('Connection error:', error);
      onError?.(error);
    });

    return () => {
      if (socket.connected) {
        socket.disconnect();
      }
    };
  }, [url, token]);

  const joinRoom = (eventId: string): Promise<Message[]> => {
    return new Promise((resolve, reject) => {
      if (!socketRef.current) {
        console.error('Socket not initialized');
        reject(new Error('Socket not initialized'));
        return;
      }

      if (!tokenRef.current) {
        console.error('No token available');
        reject(new Error('No token available'));
        return;
      }

      const handleMessageHistory = (messages: Message[]) => {
        setCurrentRoom(eventId);
        socketRef.current?.off('messageHistory', handleMessageHistory);
        resolve(messages);
      };

      const handleError = (error: any) => {
        console.error('Error joining room:', error);
        socketRef.current?.off('error', handleError);
        reject(error);
      };

      socketRef.current.once('messageHistory', handleMessageHistory);
      socketRef.current.once('error', handleError);

      socketRef.current.emit('joinEventRoom', { 
        eventId,
        token: tokenRef.current 
      });

      setTimeout(() => {
        socketRef.current?.off('messageHistory', handleMessageHistory);
        socketRef.current?.off('error', handleError);
        reject(new Error('Timeout joining room'));
      }, 10000);
    });
  };

  const leaveRoom = (eventId: string) => {
    if (!socketRef.current) return;
    
    socketRef.current.emit('leaveEventRoom', { 
      eventId,
      token: tokenRef.current 
    });
    setCurrentRoom(null);
  };

  const sendMessage = (
    eventId: string,
    content: string,
    senderName: string
  ): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (!socketRef.current) {
        reject(new Error('Socket not initialized'));
        return;
      }

      if (!tokenRef.current) {
        reject(new Error('No token available'));
        return;
      }

      const handleError = (error: any) => {
        console.error('Error sending message:', error);
        socketRef.current?.off('error', handleError);
        reject(error);
      };

      socketRef.current.once('error', handleError);

      socketRef.current.emit('sendMessage', {
        eventId,
        content,
        senderName,
        token: tokenRef.current
      });

      setTimeout(() => {
        socketRef.current?.off('error', handleError);
        resolve();
      }, 3000);
    });
  };

  const onNewMessage = (callback: (message: Message) => void) => {
    if (!socketRef.current) return () => {};

    socketRef.current.on('newMessage', callback);

    return () => {
      socketRef.current?.off('newMessage', callback);
    };
  };

  const onUserJoined = (callback: (data: { userId: string }) => void) => {
    if (!socketRef.current) return () => {};

    socketRef.current.on('userJoined', callback);

    return () => {
      socketRef.current?.off('userJoined', callback);
    };
  };

  const onUserLeft = (callback: (data: { userId: string }) => void) => {
    if (!socketRef.current) return () => {};

    socketRef.current.on('userLeaved', callback);

    return () => {
      socketRef.current?.off('userLeaved', callback);
    };
  };

  return {
    socket: socketRef.current,
    isConnected,
    currentRoom,
    joinRoom,
    leaveRoom,
    sendMessage,
    onNewMessage,
    onUserJoined,
    onUserLeft,
  };
};