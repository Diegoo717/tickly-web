import React from 'react';
import styles from './Ticket.module.css';

interface TicketProps {
  eventName?: string;
  location?: string;
  seat?: string;
  qrCodeUrl?: string;
  backgroundImage?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Ticket: React.FC<TicketProps> = ({
  eventName = "Starlight Music Fest",
  location = "Central Park, NYC",
  seat = "GA-5, R 12",
  qrCodeUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuAUIF0NCO-PIamXLEg3wPIUFvd-xWPIyhGMDoY4mBkf6KdsoDMSyM5QDWT5ybSx94_z2mg5WMOAiQn84_fnd2svTdzjWUg8DqnqsbVDlo41O4lWnVeKZjaXYNRcIBLmKpa2IH6R1sEhHjpNKB0FbI2w3jqbY6SH4ImhA9ttDUBohp17JAav5GeXqnYn9th22gLoo1fmTc1lKJE5SLrD4l7KAg-DNZ6oQydiXRPHfMfi53D8Axq1EmxmHVHs9pp1CYUV08gv1iC2oQ",
  backgroundImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBFhM8jLwRv7IKAPVzvUn0UGUUi_umjnxIfwNLCEOCNUvtfjB0A-TOcIZXyQrBTF1tCqQEH7w8udkbupSRvJOmhpXitrzJEGR7R4VyG3uXkm-ipLnwm4HL16Ap8kjeRCOHZDTIlP7_6YRitedgmZOKiAInXiGSrTefO2WJk4No3JoZ6OL4bBAA2l7aECHhvV6xYi4B2Qt-UGjzeGAoi9O4mUIJu3qSP67Nb3F9epbYieNp6r71YzvGLo_d_8K8-iOl5xY_7VZJ9cQ",
  className = "",
  size = 'medium'
}) => {
  return (
    <div className={`${styles.ticketContainer} ${styles[size]} ${className}`}>
      <div className={styles.ticket}>
        <div className={styles.ticketContent}>
          <div 
            className={styles.ticketLeft}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className={styles.ticketHeader}>
              <span className={styles.ticketLogo}>TICKLY</span>
              <div className={styles.ticketPlus}>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M12 1V23M1 12H23" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            
            <div className={styles.ticketInfo}>
              <p>Event</p>
              <h3>{eventName}</h3>
              <p className={styles.ticketLocation}>{location}</p>
            </div>
          </div>
          
          <div className={styles.ticketRight}>
            <span className={styles.ticketAdmit}>ADMIT ONE</span>
            
            <div className={styles.ticketQr}>
              <img 
                alt="QR Code" 
                src={qrCodeUrl}
                className={styles.qrImage}
              />
              <p>SCAN ME</p>
            </div>
            
            <div className={styles.ticketSeat}>
              <p>Seat</p>
              <p>{seat}</p>
            </div>
          </div>
        </div>
        
        <div className={`${styles.ticketHole} ${styles.ticketHoleLeft}`}></div>
        <div className={`${styles.ticketHole} ${styles.ticketHoleRight}`}></div>
      </div>
    </div>
  );
};

export default Ticket;