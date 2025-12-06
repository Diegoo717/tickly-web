import React, { useState, useEffect, useRef } from 'react';
import styles from './ChatWindow.module.css';
import type { ChatRoom } from '../myChatsContent/MyChatsContent';
import { useWebSocketContext } from '../../../contexts/WebSocketContext';
import type { Message } from '../../../hooks/useWebSocket';

interface ChatWindowProps {
  chatRoom?: ChatRoom;
  currentUserId: string;
  currentUserName: string;
  currentUserAvatar: string;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ 
  chatRoom, 
  currentUserId,
  currentUserName,
  currentUserAvatar 
}) => {
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { 
    isConnected, 
    joinRoom, 
    leaveRoom, 
    sendMessage, 
    onNewMessage,
    currentRoom 
  } = useWebSocketContext();

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'nearest', 
        inline: 'nearest'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!chatRoom || !isConnected) return;

    const loadRoom = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        if (currentRoom && currentRoom !== chatRoom.id.toString()) {
          leaveRoom(currentRoom);
        }

        const history = await joinRoom(chatRoom.id.toString());

        const messagesWithOwnership = history.map(msg => ({
          ...msg,
          isOwn: msg.userId === currentUserId,
        }));
        
        setMessages(messagesWithOwnership);
      } catch (err) {
        console.error('Error loading room:', err);
        setError('Failed to load chat. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    loadRoom();

    return () => {
      if (chatRoom) {
        leaveRoom(chatRoom.id.toString());
      }
    };
  }, [chatRoom?.id, isConnected]);

  useEffect(() => {
    if (!isConnected) return;

    const unsubscribe = onNewMessage((newMessage) => {
      
      const messageWithOwnership = {
        ...newMessage,
        isOwn: newMessage.userId === currentUserId,
      };
      
      setMessages(prev => [...prev, messageWithOwnership]);
    });

    return unsubscribe;
  }, [isConnected, currentUserId]);

  const handleSendMessage = async () => {
    if (!messageInput.trim() || !chatRoom || !isConnected) return;

    const messageToSend = messageInput.trim();
    setMessageInput(''); 
    
    try {
      await sendMessage(
        chatRoom.id.toString(),
        messageToSend,
        currentUserName
      );
      setError(null);
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send message. Please try again.');
      setMessageInput(messageToSend); 
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); 
      e.stopPropagation(); 
      handleSendMessage();
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} min ago`;
    
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    
    return date.toLocaleDateString();
  };

  const formatMessageTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  if (!chatRoom) {
    return (
      <div className={styles.emptyState}>
        <span className="material-symbols-outlined">chat_bubble_outline</span>
        <p>Select a chat to start messaging</p>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className={styles.emptyState}>
        <span className="material-symbols-outlined">cloud_off</span>
        <p>Connecting to chat server...</p>
      </div>
    );
  }

  return (
    <main className={styles.chatWindow}>
      <header className={styles.chatHeader}>
        <div className={styles.chatHeaderAvatar}>
          <img src={chatRoom.eventImage} alt={chatRoom.eventName} />
        </div>
        <div className={styles.chatHeaderInfo}>
          <h3 className={styles.chatHeaderTitle}>{chatRoom.eventName}</h3>
          {chatRoom.memberCount && (
            <p className={styles.chatHeaderSubtitle}>
              {chatRoom.memberCount} members, {chatRoom.onlineCount} online
            </p>
          )}
        </div>
        <div className={styles.chatHeaderActions}>
          <button className={styles.iconButton}>
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className={styles.iconButton}>
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </header>

      <div className={styles.messagesContainer}>
        {isLoading ? (
          <div className={styles.loadingState}>
            <p>Loading messages...</p>
          </div>
        ) : error ? (
          <div className={styles.errorState}>
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        ) : messages.length === 0 ? (
          <div className={styles.emptyMessages}>
            <span className="material-symbols-outlined">chat</span>
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (
          <>
            {messages.map((msg, index) => {
              const showDateDivider = index === 0 || 
                new Date(messages[index - 1].createdAt).toDateString() !== 
                new Date(msg.createdAt).toDateString();

              return (
                <React.Fragment key={msg.id}>
                  {showDateDivider && (
                    <div className={styles.dateDivider}>
                      <span>{formatTime(msg.createdAt)}</span>
                    </div>
                  )}
                  <div className={`${styles.messageWrapper} ${msg.isOwn ? styles.messageOwn : ''}`}>
                    {!msg.isOwn && (
                      <img 
                        src={msg.senderAvatar || 'https://via.placeholder.com/40'} 
                        alt={msg.senderName} 
                        className={styles.messageAvatar} 
                      />
                    )}
                    <div className={styles.messageContent}>
                      <div className={`${styles.messageBubble} ${msg.isOwn ? styles.messageBubbleOwn : ''}`}>
                        {!msg.isOwn && (
                          <p className={styles.messageSender}>
                            {msg.senderName}
                          </p>
                        )}
                        <p className={styles.messageText}>{msg.content}</p>
                      </div>
                      <span className={styles.messageTime}>
                        {formatMessageTime(msg.createdAt)}
                      </span>
                    </div>
                    {msg.isOwn && (
                      <img 
                        src={currentUserAvatar} 
                        alt="You" 
                        className={styles.messageAvatar} 
                      />
                    )}
                  </div>
                </React.Fragment>
              );
            })}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      <footer className={styles.chatFooter}>
        {error && (
          <div className={styles.errorBanner}>
            {error}
          </div>
        )}
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Type a message..."
            className={styles.messageInput}
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={!isConnected}
          />
          <div className={styles.inputActions}>
            <button className={styles.iconButton}>
              <span className="material-symbols-outlined">sentiment_satisfied</span>
            </button>
            <button className={styles.iconButton}>
              <span className="material-symbols-outlined">attach_file</span>
            </button>
          </div>
          <button 
            className={styles.sendButton} 
            onClick={handleSendMessage}
            disabled={!isConnected || !messageInput.trim()}
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </footer>
    </main>
  );
};