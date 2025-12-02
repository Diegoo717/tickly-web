import React from "react";
import styles from "./EventsExplorer.module.css";
import { EventSearchBar } from "../eventSearchBar/EventSearchBar";
import { EventCard } from "../eventCard/EventCard";
import { EventModal } from "../eventModal/EventModal";
import { useState } from "react";
import "../../../App.css";
import { useEvents } from '../../../hooks/useEvents';

export const EventsExplorer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { events, loading, error, searchEvents } = useEvents();

  const handleSearch = async (description: string) => {
    await searchEvents(description);
  }

  return (
    <main className={styles.mainContainer}>
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        event={{
          title: "Indie Music Festival",
          place: "Brooklyn, NY",
          date: "July 28, 2024",
          image: "url_de_imagen",
        }}
        tickets={{
          general: {
            name: "General Admission",
            description: "Standard entry to the event.",
            price: 45.0,
          },
          vip: {
            name: "VIP Pass",
            description: "Includes front row access and a free drink.",
            price: 95.0,
          },
        }}
        fees={5.5}
      />
      <section className={styles.eventsBrowser}>
        <h1 className={`title ${styles.floatUp}`}>Your Next Event Awaits</h1>
        <p className={`subtitle ${styles.floatUp} ${styles.stagger1} ${styles.subtitleEvents}`}>
          Discover personalized events with the power of AI.
        </p>
        <EventSearchBar
          placeHolder="Tell us what you´re looking for e.g. 'Rock concerts in LA this weekend'"
          textButton="Find Events"
          animation={true}
          onSearch={handleSearch}
        />
      </section>
      
      <section className={styles.eventsContainer}>
        {loading && (
          <div className={styles.loadingContainer}>
            <p>Loading events...</p>
          </div>
        )}

        {error && (
          <div className={styles.errorContainer}>
            <p>Error: {error.message}</p>
          </div>
        )}

        {!loading && !error && events && events.length === 0 && (
          <div className={styles.emptyContainer}>
            <p>No events found. Try a different search.</p>
          </div>
        )}

        {!loading && !error && events && events.length > 0 && (
          <>
            {events.map((event, index) => {
              const staggerClass = index < 4 ? styles[`stagger${index + 1}`] : styles.stagger4;
              
              return (
                <div key={event.eventId} className={`${styles.floatUp} ${staggerClass}`}>
                  <EventCard
                    urlImage={event.imageUrl}
                    title={event.title}
                    place={event.place}
                    date={event.dateTime}
                  />
                </div>
              );
            })}
          </>
        )}

        {!loading && !error && !events && (
          <>
            <div className={`${styles.floatUp} ${styles.stagger1}`}>
              <EventCard
                urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCzOZVQm6recKYdJt3DMD2g8HareIQv2cknngOVEueQ2_gCTqR6rkW4f2eukb_6ls2ovYUqBTFt8DvtTbzadNULX8bBcGboTRFkBbgX9fHR8m-K99IQPzfNFNdUoNkeMCBHUrvae5VBFc7bBV8Wg3TrR6zaRmYZZchSteUA-z-PJfEa5v9UVRZdG8hEZfS9P-0pWw_6VKeXSrYiGpouNC7kMs0BcdBq6ua2XAViFFZ-JzlFLmnlRQRVrNsNAhWku3TlC4-6Vi91_A"
                title="Indie Music Festival"
                place="Brooklyn, NY"
                date={{
                  year: 2025,
                  month: "JUL",
                  day: 13,
                  hour: 8,
                  minute: 30,
                }}
              />
            </div>
            <div className={`${styles.floatUp} ${styles.stagger2}`}>
              <EventCard
                urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCzOZVQm6recKYdJt3DMD2g8HareIQv2cknngOVEueQ2_gCTqR6rkW4f2eukb_6ls2ovYUqBTFt8DvtTbzadNULX8bBcGboTRFkBbgX9fHR8m-K99IQPzfNFNdUoNkeMCBHUrvae5VBFc7bBV8Wg3TrR6zaRmYZZchSteUA-z-PJfEa5v9UVRZdG8hEZfS9P-0pWw_6VKeXSrYiGpouNC7kMs0BcdBq6ua2XAViFFZ-JzlFLmnlRQRVrNsNAhWku3TlC4-6Vi91_A"
                title="Indie Music Festival"
                place="Brooklyn, NY"
                date={{
                  year: 2025,
                  month: "JUL",
                  day: 13,
                  hour: 8,
                  minute: 30,
                }}
              />
            </div>
            <div className={`${styles.floatUp} ${styles.stagger3}`}>
              <EventCard
                urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCzOZVQm6recKYdJt3DMD2g8HareIQv2cknngOVEueQ2_gCTqR6rkW4f2eukb_6ls2ovYUqBTFt8DvtTbzadNULX8bBcGboTRFkBbgX9fHR8m-K99IQPzfNFNdUoNkeMCBHUrvae5VBFc7bBV8Wg3TrR6zaRmYZZchSteUA-z-PJfEa5v9UVRZdG8hEZfS9P-0pWw_6VKeXSrYiGpouNC7kMs0BcdBq6ua2XAViFFZ-JzlFLmnlRQRVrNsNAhWku3TlC4-6Vi91_A"
                title="Indie Music Festival"
                place="Brooklyn, NY"
                date={{
                  year: 2025,
                  month: "JUL",
                  day: 13,
                  hour: 8,
                  minute: 30,
                }}
              />
            </div>
            <div className={`${styles.floatUp} ${styles.stagger4}`}>
              <EventCard
                urlImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCzOZVQm6recKYdJt3DMD2g8HareIQv2cknngOVEueQ2_gCTqR6rkW4f2eukb_6ls2ovYUqBTFt8DvtTbzadNULX8bBcGboTRFkBbgX9fHR8m-K99IQPzfNFNdUoNkeMCBHUrvae5VBFc7bBV8Wg3TrR6zaRmYZZchSteUA-z-PJfEa5v9UVRZdG8hEZfS9P-0pWw_6VKeXSrYiGpouNC7kMs0BcdBq6ua2XAViFFZ-JzlFLmnlRQRVrNsNAhWku3TlC4-6Vi91_A"
                title="Indie Music Festival"
                place="Brooklyn, NY"
                date={{
                  year: 2025,
                  month: "JUL",
                  day: 13,
                  hour: 8,
                  minute: 30,
                }}
              />
            </div>
          </>
        )}
      </section>
    </main>
  );
};