import React, { useState } from 'react';
import styles from './ChatWindow.module.css';
import type { ChatRoom } from '../myChatsContent/MyChatsContent';

interface Message {
  id: number;
  sender: string;
  senderAvatar: string;
  message: string;
  time: string;
  isOwn: boolean;
  senderColor?: string;
}

interface ChatWindowProps {
  chatRoom?: ChatRoom;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ chatRoom }) => {
  const [messageInput, setMessageInput] = useState('');

  const messages: Message[] = [
    {
      id: 1,
      sender: 'Sarah',
      senderAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGBD68YEhZAI0jmABi5WdYOSFgTjlugsV4eEqoa65n4ed6dVbgYt5BsxgGD330fRK0uGVsTORZYsQ1tFnE95s8FFVXU2vLYL00R3LC8T430IvZTofKdjfn_ZTBf6C79kSEMWo1dMOc_1ye2-TuZnnxd3lxBSSOcTnaYeIgW_n4aG_el_ChIEtcHNlIjkUxwg7vCclsetZCZGsWgmcO9ccaZaK2DzQkIuG8rZXcd6_VNK1fZ1Gc5vz2qkbSzFj-GfAPNd1xLtZTsA',
      message: 'Hey everyone! So excited for the festival. Who are you most excited to see?',
      time: '10:30 AM',
      isOwn: false,
      senderColor: '#7f13ec'
    },
    {
      id: 2,
      sender: 'You',
      senderAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsFGV9AN3SNtXhni-j2VoiS0CQNbsWe6xKjfQRS9Ft5Cp-jeHMoyDGdob6N5eVfVfr1ebDcUEnNn10ErCXXWdMP2A6f2AI58dUlCU5Y0ioTvEAD4i7RGi2TYL7TJuHA9UP8uejvJlvQSBrdB4yZTHCtsCHqKXza5PGbLfky4E7UmNOkGBKCW6F3678WiBBYaXVM_69kxS6PLTP8SQ7Q0YmiATzpPGcYb5uLfq2-eoUDZG2-OyQ5_HvPDXWw3B9UDlZ7CwmAmbAVw',
      message: "I'm so hyped for The Lumineers! Their live shows are always magical. ✨ Anyone else a fan?",
      time: '10:31 AM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Alex',
      senderAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjHHlYNL75gcU2YFf5xeIaR-hMR6HUFp50ofqcrlZMTSsnPYCinpKPd7vra0tuek8q22opRKJefl59ooKA_eNmq9bZen9tzesqPqntcMmhrAnPf1hS95Ebtzdsg_O3ABOmevF1rfMKt72I_c--MC5DO7Q7ITL-qF0Oq_zPH1TlH1AqnKeiWoGJgaCsGYCw0A8yMwcOTGOQEm4d0-KPFJ_3yRccwcjf6O7TxpotX8NqdnHPWy_k2_OtNFnQ1C-5sNT06rRgrN8yxA',
      message: "Can't wait for this! 🔥 Anyone know what the food situation is like? Any must-try spots?",
      time: '2 minutes ago',
      isOwn: false,
      senderColor: '#f97316'
    }
  ];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!chatRoom) {
    return (
      <div className={styles.emptyState}>
        <span className="material-symbols-outlined">chat_bubble_outline</span>
        <p>Select a chat to start messaging</p>
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
        {messages.map((msg, index) => (
          <React.Fragment key={msg.id}>
            {index === 2 && (
              <div className={styles.dateDivider}>
                <span>Today</span>
              </div>
            )}
            <div className={`${styles.messageWrapper} ${msg.isOwn ? styles.messageOwn : ''}`}>
              {!msg.isOwn && (
                <img src={msg.senderAvatar} alt={msg.sender} className={styles.messageAvatar} />
              )}
              <div className={styles.messageContent}>
                <div className={`${styles.messageBubble} ${msg.isOwn ? styles.messageBubbleOwn : ''}`}>
                  {!msg.isOwn && (
                    <p className={styles.messageSender} style={{ color: msg.senderColor }}>
                      {msg.sender}
                    </p>
                  )}
                  <p className={styles.messageText}>{msg.message}</p>
                </div>
                <span className={styles.messageTime}>{msg.time}</span>
              </div>
              {msg.isOwn && (
                <img src={msg.senderAvatar} alt={msg.sender} className={styles.messageAvatar} />
              )}
            </div>
          </React.Fragment>
        ))}
      </div>

      <footer className={styles.chatFooter}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Type a message..."
            className={styles.messageInput}
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div className={styles.inputActions}>
            <button className={styles.iconButton}>
              <span className="material-symbols-outlined">sentiment_satisfied</span>
            </button>
            <button className={styles.iconButton}>
              <span className="material-symbols-outlined">attach_file</span>
            </button>
          </div>
          <button className={styles.sendButton} onClick={handleSendMessage}>
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </footer>
    </main>
  );
};