import React from "react";
import styles from "./NavBar.module.css";
import { Button } from '../../buttons/Button';
import { NavLink } from "react-router";

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navFirstSection}>
        <img className={styles.logoImg} src="public\images\tickly_logo.png" alt="" />
        <NavLink className={styles.navLink} to="/"><h1 className={styles.title}>Tickly</h1></NavLink>
      </div>
      <div className={styles.navSecondSection}>
        <Button text="Events" active={false} link="discoverevent"/>
        <Button text="Sell Tickets" active={false} link="selltickets"/>
        <Button text="About" active={false} link="about"/>
        <Button text="Sign In" active={false} link="login"/>
        <Button text="Sign Up" active={false} link="register"/>
      </div>
    </nav>
  );
};
