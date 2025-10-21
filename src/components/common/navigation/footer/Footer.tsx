import React from 'react';
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.brandHeader}>
              <img className={styles.logoImg} src="public\images\tickly_logo.png" alt="" />
              <h2 className={styles.brandTitle}>Tickly</h2>
            </div>
            <p className={styles.description}>
              AI-powered event discovery and ticketing platform.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.42 2.33,6.16 2.33,6.94C2.33,8.43 3.08,9.75 4.18,10.55C3.47,10.53 2.8,10.33 2.2,10.03C2.2,10.05 2.2,10.07 2.2,10.08C2.2,12.21 3.73,13.99 5.79,14.41C5.45,14.5 5.08,14.55 4.69,14.55C4.42,14.55 4.15,14.53 3.89,14.48C4.45,16.22 6.04,17.47 7.95,17.5C6.46,18.69 4.61,19.41 2.62,19.41C2.25,19.41 1.88,19.39 1.53,19.34C3.48,20.59 5.76,21.33 8.21,21.33C16,21.33 20.25,14.82 20.25,9.2C20.25,9 20.25,8.8 20.24,8.6C21.06,8.03 21.84,7.07 22.46,6Z"></path>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.011 7.053.069 2.791.229.229 2.791.069 7.053.011 8.333 0 8.74 0 12s.011 3.667.069 4.947c.16 4.261 2.724 6.825 7.004 6.986C8.333 23.989 8.74 24 12 24s3.667-.011 4.947-.069c4.28-.161 6.844-2.725 7.004-7.004.058-1.28.069-1.687.069-4.947s-.011-3.667-.069-4.947C23.771 2.791 21.209.229 16.947.069 15.667.011 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"></path>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon}>
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Explore</h3>
            <a href="#" className={styles.link}>Browse Events</a>
            <a href="#" className={styles.link}>Categories</a>
            <a href="#" className={styles.link}>Locations</a>
            <a href="#" className={styles.link}>Sell Tickets</a>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>About</h3>
            <a href="#" className={styles.link}>About Tickly</a>
            <a href="#" className={styles.link}>Careers</a>
            <a href="#" className={styles.link}>Press</a>
            <a href="#" className={styles.link}>Blog</a>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Support</h3>
            <a href="#" className={styles.link}>Help Center</a>
            <a href="#" className={styles.link}>Contact Us</a>
            <a href="#" className={styles.link}>Terms of Service</a>
            <a href="#" className={styles.link}>Privacy Policy</a>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>© 2024 Tickly. All rights reserved.</p>
          <div className={styles.paymentIcons}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" 
              alt="Visa" 
              className={styles.paymentImg}
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
              alt="Mastercard" 
              className={styles.paymentImg}
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" 
              alt="PayPal" 
              className={styles.paymentImg}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;