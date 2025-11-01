import React from "react";
import styles from "./MyTicketsContent.module.css";
import { MyTicketCard } from "./MyTicketCard";
import "../../App.css";

export const MyTicketsContent = () => {
  const tickets = [
    {
      id: 1,
      eventName: "The Grand Symphony",
      ticketType: "VIP Pass",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCzumrYf-9gzsqzwUiIvqgIIO6eoqEglB11fMZMTSRjseNSr0z5U5cuCdKx2OTNAwewm3v41ESNH1EWK-vEhz2gc30_cL6faTVgFgvmDR8fF8eMI5kwJUxnLhm6LkHwCXm7nZI8pYHGjzF5xapP180SNRlXGNW25MMiuAxH5lWFAYgfLILIJsPVp3EAg2iV_fyy-JPzCDvEEt_UFBjoaiLNRQNoqmJkrJ_7ZIsqP3yGUyV1ggoqRWmUX56i_WJiXyY11n-9L06AUg",
      date: "September 05, 2024 - 7:00 PM",
      location: "Orchestra Hall, Chicago, IL",
      seat: "VIP-1, Row A",
      orderNumber: "#C7F2E",
      qrCode: "QR_CODE_2",
    },
    {
      id: 2,
      eventName: "Indie Music Festival",
      ticketType: "General Admission",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCzOZVQm6recKYdJt3DMD2g8HareIQv2cknngOVEueQ2_gCTqR6rkW4f2eukb_6ls2ovYUqBTFt8DvtTbzadNULX8bBcGboTRFkBbgX9fHR8m-K99IQPzfNFNdUoNkeMCBHUrvae5VBFc7bBV8Wg3TrR6zaRmYZZchSteUA-z-PJfEa5v9UVRZdG8hEZfS9P-0pWw_6VKeXSrYiGpouNC7kMs0BcdBq6ua2XAViFFZ-JzlFLmnlRQRVrNsNAhWku3TlC4-6Vi91_A",
      date: "July 28, 2024 - 8:00 PM",
      location: "The Music Hall, Brooklyn, NY",
      seat: "GA-3, Row 12",
      orderNumber: "#A3B8D",
      qrCode: "QR_CODE_1",
    },
  ];

  return (
    <div className={styles.ticketsContainer}>
      <main className={`${styles.mainContent} ${styles.floatUp}`}>
        <div className={styles.contentWrapper}>
          <div className={styles.headerSection}>
            <h1 className="title">My Tickets</h1>
            <p className="subtitle">
              All your upcoming events, perfectly organized and ready to enjoy.
            </p>
          </div>

          <div className={styles.ticketsGrid}>
            {tickets.map((ticket, index) => (
              <MyTicketCard
                key={ticket.id}
                ticket={ticket}
                animationDelay={index}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
