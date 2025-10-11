import React from "react";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navFirstSection}>
        <img className={styles.logoImg} src="public\tickly_logo.png" alt="" />
        <h1 className={styles.title}>Tickly</h1>
      </div>
      <div className={styles.navSecondSection}>
        <button className={styles.button} >Events</button>
        <button className={styles.button}>Sell tickets</button>
        <button className={styles.button}>About</button>
        <button className={styles.button}>Sign In</button>
        <button className={styles.button}>Sign Up</button>
      </div>
    </nav>
  );
};
