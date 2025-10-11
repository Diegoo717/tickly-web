import React from "react";
import styles from "./Hero.module.css";
import { Button } from '../../common/buttons/Button';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <h1 className={styles.title}>
          Discover Your Next Unforgettable <br />
          Experience
        </h1>
        <div className={styles.inputWrapper}>
          <img src="public\images\search_icon.png" alt="Search Icon" />
          <input className={styles.inputSearch} placeholder="e.g., 'Rock concerts in New York this weekend'" type="text" />
          <Button text="Find Events" active={true}/>
        </div>
      </main>
      <section className={styles.featured}></section>
    </div>
  );
};
