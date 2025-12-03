import React, { useState, useEffect } from 'react';
import styles from './MyTicketCard.module.css';
import { generateQRCode } from '../../utils/codeGenerators';

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
  eventId: string;
}

interface MyTicketCardProps {
  ticket: TicketData;
  animationDelay?: number;
}

export const MyTicketCard: React.FC<MyTicketCardProps> = ({ ticket, animationDelay = 0 }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    const loadQRCode = async () => {
      const qr = await generateQRCode(ticket.eventId);
      setQrCodeUrl(qr);
    };
    
    loadQRCode();
  }, [ticket.eventId]);

  const handleDownload = () => {
    // TODO: Implement download pdf ticket
  };

  const staggerClass = animationDelay === 0 ? styles.stagger1 : 
                       animationDelay === 1 ? styles.stagger2 : 
                       animationDelay === 2 ? styles.stagger3 :
                       styles.stagger4;

  return (
    <div className={`${styles.ticketCard} ${styles.floatUp} ${staggerClass}`}>
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

      <div className={styles.qrSection}>
        <div className={styles.qrCodeContainer}>
          <div className={styles.qrCodeWrapper}>
            {qrCodeUrl ? (
              <img src={qrCodeUrl} alt="QR Code" className={styles.qrCodeImage} />
            ) : (
              <div className={styles.qrCodePlaceholder}>
                <div className={styles.loadingSpinner}></div>
                <span>Generating QR...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};