import { useState, useEffect } from 'react';
import styles from './MyChatsContent.module.css';
import { ChatSidebar } from '../chatSideBar/ChatSideBar';
import { ChatWindow } from '../chatWindow/ChatWindow';
import { useWebSocketContext } from '../../../contexts/WebSocketContext';

export interface ChatRoom {
  id: string; 
  eventName: string;
  eventImage: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isActive: boolean;
  lastMessageSender?: string;
  memberCount?: number;
  onlineCount?: number;
  isArchived?: boolean;
}

interface MyChatsContentProps {
  currentUserId: string;
  currentUserName: string;
  currentUserAvatar: string;
  initialChatRooms?: ChatRoom[];
}

export const MyChatsContent: React.FC<MyChatsContentProps> = ({
  currentUserId,
  currentUserName,
  currentUserAvatar,
  initialChatRooms
}) => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>(initialChatRooms || []);
  const { onNewMessage, isConnected } = useWebSocketContext();

  useEffect(() => {
    if (initialChatRooms && initialChatRooms.length > 0) {
      setChatRooms(initialChatRooms);
    }
  }, [initialChatRooms]);

  useEffect(() => {
    if (!isConnected) return;

    const unsubscribe = onNewMessage((message) => {
      setChatRooms(prevRooms => 
        prevRooms.map(room => {
          if (room.id === message.eventId) {
            return {
              ...room,
              lastMessage: message.content,
              lastMessageTime: 'Just now',
              lastMessageSender: message.senderName,
              unreadCount: selectedChat !== room.id && message.userId !== currentUserId
                ? room.unreadCount + 1
                : room.unreadCount
            };
          }
          return room;
        })
      );
    });

    return unsubscribe;
  }, [isConnected, selectedChat, currentUserId, onNewMessage]);

  const handleSelectChat = (chatId: string) => {
    setSelectedChat(chatId);

    setChatRooms(prevRooms =>
      prevRooms.map(room =>
        room.id === chatId
          ? { ...room, unreadCount: 0 }
          : room
      )
    );
  };

  const selectedChatData = chatRooms.find(chat => chat.id === selectedChat);

  return (
    <div className={styles.chatsContainer}>
      <main className={`${styles.mainContent} ${styles.floatUp}`}>
        <div className={styles.chatLayout}>
          <ChatSidebar 
            chatRooms={chatRooms}
            selectedChatId={selectedChat}
            onSelectChat={handleSelectChat}
          />
          <ChatWindow 
            chatRoom={selectedChatData}
            currentUserId={currentUserId}
            currentUserName={currentUserName}
            currentUserAvatar={currentUserAvatar}
          />
        </div>
      </main>
    </div>
  );
};