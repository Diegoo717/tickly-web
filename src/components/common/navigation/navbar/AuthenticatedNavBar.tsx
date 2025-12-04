import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./NavBar.module.css";
import { Button } from '../../buttons/Button';
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";

interface AuthenticatedNavBarProps {
  activePage?: string;
}

export const AuthenticatedNavBar = ({ activePage = "" }: AuthenticatedNavBarProps) => {
  const { user, signOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0, width: 0 });
  const navigate = useNavigate();
  const userMenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (dropdownOpen && userMenuRef.current) {
      const rect = userMenuRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom,
        right: window.innerWidth - rect.right,
        width: rect.width
      });
    }
  }, [dropdownOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const displayName = user?.user_metadata?.first_name || 
                      user?.user_metadata?.name?.split(' ')[0] ||
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
          text="My Tickets" 
          active={activePage === "my-tickets"} 
          link="my-tickets"
        />
        <Button 
          text="My Chats" 
          active={activePage === "my-chats"} 
          link="my-chats"
        />

        <div 
          ref={userMenuRef}
          className={styles.userMenu}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className={styles.userButton}>
            <span className="material-symbols-outlined">account_circle</span>
            <span className={styles.userName}>{displayName}</span>
          </button>
        </div>
      </div>

      {dropdownOpen && createPortal(
        <div 
          className={styles.userDropdownPortal}
          style={{
            position: 'fixed',
            top: `${dropdownPosition.top}px`,
            right: `${dropdownPosition.right}px`,
            zIndex: 9999
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={{
            position: 'absolute',
            bottom: '100%',
            left: 0,
            right: 0,
            height: '20px',
            background: 'transparent'
          }} />
          
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
        </div>,
        document.body
      )}
    </nav>
  );
};