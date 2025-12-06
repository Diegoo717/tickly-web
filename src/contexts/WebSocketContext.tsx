import { createContext, useContext, type ReactNode } from 'react';
import { useWebSocket, type Message } from '../hooks/useWebSocket';
import { useAuth } from './AuthContext';
import type { Socket } from 'socket.io-client';

interface WebSocketContextType {
  socket: Socket | null;
  isConnected: boolean;
  currentRoom: string | null;
  joinRoom: (eventId: string) => Promise<Message[]>;
  leaveRoom: (eventId: string) => void;
  sendMessage: (eventId: string, content: string, senderName: string) => Promise<void>;
  onNewMessage: (callback: (message: Message) => void) => () => void;
  onUserJoined: (callback: (data: { userId: string }) => void) => () => void;
  onUserLeft: (callback: (data: { userId: string }) => void) => () => void;
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

interface WebSocketProviderProps {
  children: ReactNode;
  wsUrl: string;
}

export function WebSocketProvider({
  children,
  wsUrl,
}: WebSocketProviderProps) {
  const { session } = useAuth();
  const token = session?.access_token || null;

  const websocket = useWebSocket({
    url: wsUrl,
    token,
    onConnect: () => {
    },
    onDisconnect: () => {
    },
    onError: (error) => {
      console.error('WebSocket error:', error);
    },
  });

  return (
    <WebSocketContext.Provider value={websocket}>
      {children}
    </WebSocketContext.Provider>
  );
}

export function useWebSocketContext() {
  const context = useContext(WebSocketContext);
  if (context === undefined) {
    throw new Error('useWebSocketContext must be used within a WebSocketProvider');
  }
  return context;
}