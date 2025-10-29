import React from "react";
import styles from "./EventsExplorer.module.css";
import { EventSearchBar } from "../eventSearchBar/EventSearchBar";
import { EventCard } from "../eventCard/EventCard";

export const EventsExplorer = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.eventsBrowser}>
        <h1 className={styles.title}>Your Next Event Awaits</h1>
        <p className={styles.subtitle}>
          Discover personalized events with the power of AI.
        </p>
        <EventSearchBar
          placeHolder="Tell us what you´re looking for e.g. 'Rock concerts in LA this weekend'"
          textButton="Find Events"
          widht={35}
          height={25}
        />
      </section>
      <section className={styles.eventsContainer}>
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
      </section>
    </main>
  );
};
