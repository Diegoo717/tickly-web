import React from "react";
import styles from "./NavBar.module.css";
import { Button } from '../../buttons/Button';

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navFirstSection}>
        <img className={styles.logoImg} src="public\images\tickly_logo.png" alt="" />
        <h1 className={styles.title}>Tickly</h1>
      </div>
      <div className={styles.navSecondSection}>
        <Button text="Events" active={false}/>
        <Button text="Sell Tickets" active={false}/>
        <Button text="About" active={false}/>
        <Button text="Sign In" active={false}/>
        <Button text="Sign Up" active={false}/>
      </div>
    </nav>
  );
};
