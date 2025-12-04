import React from "react";
import styles from "./NavBar.module.css";
import { Button } from '../../buttons/Button';
import { NavLink } from "react-router-dom";

interface NavBarProps {
  activePage?: string;
}

export const NavBar = ({ activePage = "" }: NavBarProps) => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navFirstSection}>
        <img className={styles.logoImg} src="/images/tickly_logo.png" alt="Tickly Logo" />
        <NavLink className={styles.navLink} to="/">
          <h1 className={styles.title}>Tickly</h1>
        </NavLink>
      </div>
      <div className={styles.navSecondSection}>
        <Button 
          text="Events" 
          active={activePage === "discover-events"} 
          link="discover-events"
        />
        <Button 
          text="Sell Tickets" 
          active={activePage === "sell-tickets"} 
          link="sell-tickets"
        />
        <Button 
          text="About" 
          active={activePage === "about"} 
          link="about"
        />
        <Button 
          text="Sign In" 
          active={activePage === "login"} 
          link="login"
        />
        <Button 
          text="Sign Up" 
          active={activePage === "register"} 
          link="register"
        />
      </div>
    </nav>
  );
};