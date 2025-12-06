import React, { useState } from 'react';
import styles from './ChatSideBar.module.css';
import type { ChatRoom } from '../myChatsContent/MyChatsContent';

interface ChatSidebarProps {
  chatRooms: ChatRoom[];
  selectedChatId: number;
  onSelectChat: (chatId: number) => void;
}

export const ChatSidebar: React.FC<ChatSidebarProps> = ({ 
  chatRooms, 
  selectedChatId, 
  onSelectChat 
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChats = chatRooms.filter(chat =>
    chat.eventName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h2 className={styles.title}>My Chat Rooms</h2>
        <div className={styles.searchWrapper}>
          <input
            type="search"
            placeholder="Search chats..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="material-symbols-outlined">search</span>
        </div>
      </div>

      <nav className={styles.chatList}>
        {filteredChats.map((chat) => (
          <button
            key={chat.id}
            className={`${styles.chatItem} ${
              selectedChatId === chat.id ? styles.chatItemActive : ''
            } ${chat.isArchived ? styles.chatItemArchived : ''}`}
            onClick={() => onSelectChat(chat.id)}
          >
            <div className={styles.chatAvatar}>
              <img src={chat.eventImage} alt={chat.eventName} />
              {chat.isActive && (
                <span className={styles.onlineIndicator}>
                  <span className={styles.onlinePing}></span>
                  <span className={styles.onlineDot}></span>
                </span>
              )}
            </div>

            <div className={styles.chatInfo}>
              <div className={styles.chatHeader}>
                <h3 className={styles.chatName}>{chat.eventName}</h3>
                <span className={styles.chatTime}>{chat.lastMessageTime}</span>
              </div>
              <div className={styles.chatFooter}>
                <p className={`${styles.chatMessage} ${
                  selectedChatId === chat.id ? styles.chatMessageActive : ''
                }`}>
                  {chat.lastMessageSender && `${chat.lastMessageSender}: `}
                  {chat.lastMessage}
                </p>
                {chat.unreadCount > 0 && (
                  <span className={styles.unreadBadge}>{chat.unreadCount}</span>
                )}
              </div>
            </div>
          </button>
        ))}
      </nav>
    </aside>
  );
};