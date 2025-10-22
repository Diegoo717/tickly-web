import React from 'react';
import styles from './AboutHero.module.css';
import { Button } from '../common/buttons/Button';

export const AboutHero = () => {
  return (
    <section className={styles.section} id="about-us">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={`${styles.title} ${styles.floatUp}`}>
            More Than Just Tickets
          </h2>
          <p className={`${styles.subtitle} ${styles.floatUp} ${styles.stagger1}`}>
            At Tickly, we're redefining the event experience. We believe that the excitement 
            should start long before the show, with a discovery process that's as thrilling 
            as the event itself.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          <div className={`${styles.card} ${styles.floatUp} ${styles.stagger1}`}>
            <div className={styles.iconBadge}>
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <p className={styles.cardDescription}>
              To seamlessly connect you to unforgettable moments. We're passionate about 
              making live event discovery effortless, personal, and exciting.
            </p>
          </div>

          <div className={`${styles.card} ${styles.floatUp} ${styles.stagger2}`}>
            <div className={styles.iconBadge}>
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <h3 className={styles.cardTitle}>AI-Powered Discovery</h3>
            <p className={styles.cardDescription}>
              Our smart platform learns your unique tastes to recommend events you're 
              guaranteed to love. Say goodbye to endless scrolling and hello to personalized 
              suggestions.
            </p>
          </div>

          <div className={`${styles.card} ${styles.floatUp} ${styles.stagger3}`}>
            <div className={styles.iconBadge}>
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <h3 className={styles.cardTitle}>Secure & Seamless</h3>
            <p className={styles.cardDescription}>
              From browsing to buying, enjoy a hassle-free journey with our secure payment 
              system and instant digital ticket access. Your next adventure is just a click away.
            </p>
          </div>
        </div>

        <div className={`${styles.ctaContainer} ${styles.floatUp} ${styles.stagger3}`}>
          <Button text="Explore Events" active={true}/>
        </div>
      </div>
    </section>
  );
};