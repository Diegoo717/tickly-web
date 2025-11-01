import React from 'react';
import styles from './MyTicketCard.module.css';

interface TicketData {
  id: number;
  eventName: string;
  ticketType: string;
  imageUrl: string;
  date: string;
  location: string;
  seat: string;
  orderNumber: string;
  qrCode: string;
}

interface MyTicketCardProps {
  ticket: TicketData;
  animationDelay?: number;
}

export const MyTicketCard: React.FC<MyTicketCardProps> = ({ ticket, animationDelay = 0 }) => {
  const handleDownload = () => {
    console.log(`Downloading ticket: ${ticket.orderNumber}`);
  };

  const staggerClass = animationDelay === 0 ? styles.stagger1 : 
                       animationDelay === 1 ? styles.stagger2 : 
                       styles.stagger3;

  return (
    <div className={`${styles.ticketCard} ${styles.floatUp} ${staggerClass}`}>
      {/* Image Section */}
      <div className={styles.imageSection}>
        <img 
          src={ticket.imageUrl} 
          alt={ticket.eventName}
          className={styles.eventImage}
        />
        <div className={styles.imageOverlay}></div>
        <div className={styles.imageContent}>
          <h3 className={styles.eventName}>{ticket.eventName}</h3>
          <p className={styles.ticketType}>{ticket.ticketType}</p>
        </div>
      </div>

      {/* Info Section */}
      <div className={styles.infoSection}>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <p className={styles.infoLabel}>Date & Time</p>
            <p className={styles.infoValue}>{ticket.date}</p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.infoLabel}>Location</p>
            <p className={styles.infoValue}>{ticket.location}</p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.infoLabel}>Seat</p>
            <p className={styles.infoValue}>{ticket.seat}</p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.infoLabel}>Order #</p>
            <p className={styles.infoValue}>{ticket.orderNumber}</p>
          </div>
          <div className={styles.downloadButtonWrapper}>
            <button onClick={handleDownload} className={styles.downloadButton}>
              <span className="material-symbols-outlined">download</span>
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className={styles.qrSection}>
        <div className={styles.qrCodeWrapper}>
          <svg 
            className={styles.qrCode}
            fill="none" 
            height="120" 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1.5" 
            viewBox="0 0 24 24" 
            width="120"
          >
            <path d="M5.5 5.5v2h-2v-2h2zm2 0v2h2v-2h-2zm-2 2v2h2v-2h-2zm-2 2h2v-2h-2v2zm0 2h2v2h-2v-2zm2 0v-2h2v2h-2zm2 2h-2v-2h2v2zm0 2v-2h-2v2h2zm-2 0h-2v2h2v-2zm-2 0v2h-2v-2h2zm10 2h2v2h-2v-2zm-2-2v2h2v-2h-2zm-2-2h2v-2h-2v2zm-2-2v2h2v-2h-2zm4 0h2v2h-2v-2zm2 2h2v-2h-2v2zm2 0v-2h2v2h-2zm0-2h-2v-2h2v2zm-2-2v-2h2v2h-2zm2-2h-2v2h2v-2zm-2 0v2h-2v-2h2zm-2-2h-2v2h2v-2zm0 2v2h-2v-2h2zm-2 2h-2v2h2v-2zm0 2h2v2h-2v-2z"></path>
            <path d="M12.5 12.5v-2h-2v2h2zm-2-2h-2v2h2v-2zm2 2h2v2h-2v-2zm-2 2v2h2v-2h-2zm-2-2v2h-2v-2h2zm0 2h-2v2h2v-2z"></path>
          </svg>
        </div>
        <div className={styles.barcodeWrapper}>
          <svg 
            className={styles.barcode}
            fill="currentColor" 
            height="40" 
            viewBox="0 0 200 40" 
            width="100%"
          >
            <rect height="40" width="4" x="0" y="0"></rect>
            <rect height="40" width="2" x="8" y="0"></rect>
            <rect height="40" width="6" x="14" y="0"></rect>
            <rect height="40" width="2" x="24" y="0"></rect>
            <rect height="40" width="4" x="30" y="0"></rect>
            <rect height="40" width="2" x="38" y="0"></rect>
            <rect height="40" width="2" x="44" y="0"></rect>
            <rect height="40" width="6" x="50" y="0"></rect>
            <rect height="40" width="2" x="60" y="0"></rect>
            <rect height="40" width="4" x="64" y="0"></rect>
            <rect height="40" width="4" x="72" y="0"></rect>
            <rect height="40" width="2" x="80" y="0"></rect>
            <rect height="40" width="2" x="86" y="0"></rect>
            <rect height="40" width="4" x="92" y="0"></rect>
            <rect height="40" width="6" x="100" y="0"></rect>
            <rect height="40" width="2" x="110" y="0"></rect>
            <rect height="40" width="2" x="116" y="0"></rect>
            <rect height="40" width="4" x="122" y="0"></rect>
            <rect height="40" width="2" x="130" y="0"></rect>
            <rect height="40" width="6" x="136" y="0"></rect>
            <rect height="40" width="2" x="146" y="0"></rect>
            <rect height="40" width="4" x="152" y="0"></rect>
            <rect height="40" width="2" x="160" y="0"></rect>
            <rect height="40" width="4" x="166" y="0"></rect>
            <rect height="40" width="2" x="174" y="0"></rect>
            <rect height="40" width="6" x="180" y="0"></rect>
            <rect height="40" width="2" x="190" y="0"></rect>
            <rect height="40" width="4" x="196" y="0"></rect>
          </svg>
        </div>
      </div>
    </div>
  );
};