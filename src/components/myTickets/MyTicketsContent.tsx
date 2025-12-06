import styles from "./MyTicketsContent.module.css";
import { MyTicketCard } from "./MyTicketCard";
import { useTickets } from "../../hooks/useTickets";
import { useAuth } from "../../contexts/AuthContext";
import "../../App.css";

export const MyTicketsContent = () => {
  const { user } = useAuth();

  const { tickets, loading, error } = useTickets(user?.id || null);

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

          {loading && (
            <div className={styles.loadingContainer}>
              <p>Loading your tickets...</p>
            </div>
          )}

          {error && (
            <div className={styles.errorContainer}>
              <p>Error: {error.message}</p>
            </div>
          )}

          {!loading && !error && tickets.length === 0 && (
            <div className={styles.emptyContainer}>
              <p>You don't have any tickets yet. Start exploring events!</p>
            </div>
          )}

          {!loading && !error && tickets.length > 0 && (
            <div className={styles.ticketsGrid}>
              {tickets
                .sort(
                  (a, b) =>
                    new Date(b.purchasedAt).getTime() -
                    new Date(a.purchasedAt).getTime()
                )
                .map((ticket, index) => (
                  <MyTicketCard
                    key={ticket.id}
                    ticket={ticket}
                    animationDelay={index % 4}
                  />
                ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
