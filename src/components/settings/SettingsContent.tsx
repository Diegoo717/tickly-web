import React from 'react';
import styles from './SettingsContent.module.css';
import '../../App.css'

export const SettingsContent = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.diffusedCircle}></div>
      
      <div className={`${styles.contentWrapper} ${styles.floatUp}`}>
        <div className={styles.headerSection}>
          <h1 className="title">Settings</h1>
          <p className="subtitle">Manage your account and preferences.</p>
        </div>

        <div className={styles.settingsCard}>
          <div className={styles.settingsSection}>
            <div className={styles.settingItem}>
              <div>
                <h3 className={styles.settingTitle}>Dark Mode</h3>
                <p className={styles.settingDescription}>Toggle between light and dark themes.</p>
              </div>
              <button className={`${styles.toggle}`}>
                <span className={`${styles.toggleThumb}`}></span>
              </button>
            </div>

            <hr className={styles.divider} />

            <div className={styles.settingItem}>
              <div>
                <h3 className={styles.settingTitle}>Email Notifications</h3>
                <p className={styles.settingDescription}>Receive updates about events and offers.</p>
              </div>
              <button className={styles.toggle}>
                <span className={styles.toggleThumb}></span>
              </button>
            </div>

            <hr className={styles.divider} />

            <div className={styles.settingItem}>
              <div>
                <h3 className={styles.settingTitle}>Language</h3>
                <p className={styles.settingDescription}>Set your preferred language for the interface.</p>
              </div>
              <div className={styles.selectWrapper}>
                <select className={styles.select}>
                  <option>English</option>
                  <option>Español</option>
                  <option>Français</option>
                </select>
                <span className={styles.selectIcon}>▼</span>
              </div>
            </div>

            <hr className={styles.divider} />

            <div className={styles.settingItem}>
              <div>
                <h3 className={styles.settingTitle}>Change Password</h3>
                <p className={styles.settingDescription}>Update your account password.</p>
              </div>
              <button className={styles.changeButton}>
                <span>Change</span>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.dangerZone}>
          <div className={styles.dangerContent}>
            <div className={styles.dangerIcon}>⚠️</div>
            <div className={styles.dangerInfo}>
              <h2 className={styles.dangerTitle}>Danger Zone</h2>
              <div className={styles.dangerSection}>
                <div>
                  <h3 className={styles.settingTitle}>Delete Account</h3>
                  <p className={styles.dangerDescription}>
                    Once you delete your account, there is no going back. All your data, 
                    including tickets and preferences, will be permanently removed. Please be certain.
                  </p>
                </div>
                <button className={styles.deleteButton}>
                  <span>Delete My Account</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};