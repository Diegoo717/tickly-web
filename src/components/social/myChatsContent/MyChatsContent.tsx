import React, { useState } from 'react';
import styles from './MyChatsContent.module.css';
import { ChatSidebar } from '../chatSideBar/ChatSideBar';
import { ChatWindow } from '../chatWindow/ChatWindow';

export interface ChatRoom {
  id: number;
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

export const MyChatsContent = () => {
  const [selectedChat, setSelectedChat] = useState<number>(1);

  const chatRooms: ChatRoom[] = [
    {
      id: 1,
      eventName: 'Indie Music Festival',
      eventImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMF5_79gvDvPfVHLCaJI4yXx5JquOqSqrtHzCuTtZoGBDIlSRb9IBh44RHCxUtp7ZW9qwpTTMK8_urXFlMP-pVurqekDK7otzsw7_GegDw1QxJ-6MjKETl14L6djZiqXJFt55wUKbmWqJbotikbvbq6MDCsw-KTdf7IPwudUdHQtHfVPQjsHvCKqXlozVR99AebfgDyEl4aqd8HySG-DChB2W8-qZnopZfGfqMdmZ_bueBCRZEGOWkk3_ccPVfZzGlSN4UrSPAdQ',
      lastMessage: "Can't wait for this! 🔥",
      lastMessageTime: '2 min',
      lastMessageSender: 'Alex',
      unreadCount: 1,
      isActive: true,
      memberCount: 144,
      onlineCount: 9
    },
    {
      id: 2,
      eventName: 'The Grand Symphony',
      eventImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDP2rZeTbXBNz-yKpmRxByrLpVT2iNB52wPnJsln41hSeRuI9bRss3RnjqccE3LKBgDfx51dUaSxLJhgel2VMsFyyzu99pPdynxeGNsvc2elQBsK92W6dPu1zFEZN3fIn_RgVLjuGKvFfhb076ZGdhhZmGjBfK2BV2jAplVN2FayhxW3BhxVG4XMmuWWIcFkwl77htCupiu8iWyKGVC6AUOIRFAW7LemgjYSVpV8G6Fe-Unl81hejs60tCigvfmKcX-H4UH_i5AhA',
      lastMessage: 'Is there a dress code?',
      lastMessageTime: '1 day',
      lastMessageSender: 'You',
      unreadCount: 0,
      isActive: false
    },
    {
      id: 3,
      eventName: 'Tech Conference 2024',
      eventImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhNPQxb64_WVNr6GrOCKu0jF1IMVx0YvM3Qnl1kZEe5APGjv1QR8aXVaGfBXhmjNJYtoMHOey4ka8i6xEl0DBPifryo7Sdf1VPBTBxdfftlgd_zhxoTIgnF2YGlcJiikJm3GvwkknoxSDF7i8YO4S7yocspUalpEfrOhWXisE6wgSKPQ7YBwj9DcfYzqTxuU7HURIGDBY3eU3UVNbcz3AelmudllMBIKUUngYwmycXR4YFm_34PJhJm65hOHe3aisMgBKWS0cBOw',
      lastMessage: 'Chat room is archived.',
      lastMessageTime: 'Archived',
      unreadCount: 0,
      isActive: false,
      isArchived: true
    }
  ];

  const selectedChatData = chatRooms.find(chat => chat.id === selectedChat);

  return (
    <div className={styles.chatsContainer}>
      <main className={`${styles.mainContent} ${styles.floatUp}`}>
        <div className={styles.chatLayout}>
          <ChatSidebar 
            chatRooms={chatRooms}
            selectedChatId={selectedChat}
            onSelectChat={setSelectedChat}
          />
          <ChatWindow 
            chatRoom={selectedChatData}
          />
        </div>
      </main>
    </div>
  );
};