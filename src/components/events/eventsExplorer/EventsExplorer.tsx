import React from "react";
import styles from "./EventsExplorer.module.css";
import { EventSearchBar } from "../eventSearchBar/EventSearchBar";
import { EventCard } from "../eventCard/EventCard";

export const EventsExplorer = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.eventsBrowser}>
        <h1 className={`${styles.title} ${styles.floatUp}`}>Your Next Event Awaits</h1>
        <p className={`${styles.subtitle} ${styles.floatUp} ${styles.stagger1}`}>
          Discover personalized events with the power of AI.
        </p>
          <EventSearchBar
            placeHolder="Tell us what you´re looking for e.g. 'Rock concerts in LA this weekend'"
            textButton="Find Events"
            animation={true}
          />
      </section>
      <section className={styles.eventsContainer}>
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
              second: 20
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
              second: 20
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
              second: 20
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
              second: 20
            }}
          />
        </div>
      </section>
    </main>
  );
};