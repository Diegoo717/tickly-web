import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { Button } from '../../buttons/Button';
import { useNavigate, NavLink } from "react-router";
import { useAuth } from "../../../../contexts/AuthContext";

export const AuthenticatedNavBar = () => {
  const { user, signOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const displayName = user?.user_metadata?.first_name || 
                      user?.email?.split('@')[0] || 
                      'User';

  return (
    <nav className={styles.navBar}>
      <div className={styles.navFirstSection}>
        <img className={styles.logoImg} src="/images/tickly_logo.png" alt="Tickly Logo" />
        <NavLink className={styles.navLink} to="/">
          <h1 className={styles.title}>Tickly</h1>
        </NavLink>
      </div>
      <div className={styles.navSecondSection}>
        <Button text="Events" active={false} link="discoverevents"/>
        <Button text="Sell Tickets" active={false} link="selltickets"/>
        <Button text="My Tickets" active={false} link="my-tickets"/>
        <Button text="My Chats" active={false} link="my-chats"/>

        <div 
          className={styles.userMenu}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className={styles.userButton}>
            <span className="material-symbols-outlined">account_circle</span>
            <span className={styles.userName}>{displayName}</span>
          </button>
          
          {dropdownOpen && (
            <div className={styles.userDropdown}>
              <NavLink to="/profile" className={styles.dropdownItem}>
                <span className="material-symbols-outlined">person</span>
                <span>Profile</span>
              </NavLink>
              <NavLink to="/settings" className={styles.dropdownItem}>
                <span className="material-symbols-outlined">settings</span>
                <span>Settings</span>
              </NavLink>
              <div className={styles.dropdownDivider}></div>
              <button onClick={handleSignOut} className={styles.dropdownItem}>
                <span className="material-symbols-outlined">logout</span>
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};