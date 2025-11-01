import React from 'react';
import styles from './ProfileContent.module.css';
import '../../App.css'

export const ProfileContent = () => {
  return (
    <div className={styles.profileContainer}>  
      <main className={`${styles.mainContent} ${styles.floatUp}`}>
        <div className={styles.contentWrapper}>
          <div className={styles.profileHeader}>
            <div className={styles.avatarWrapper}>
              <img 
                alt="User profile picture" 
                className={styles.avatar}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6Q9sFfP0pTfW7JCTXw7sUNdZeWo8iLKcank65x4-mJY6mjcFB2ok8aN3I7jVy9x31EIvmIZjKXI_knUI7tnB_IsAmpJRF-OQ_EDYhmSOm18-AEJqrGxMm6JQijbCfNPWYtsNT6M5EkwrmePULAKNP-C3HeJGTFztzdX0FrjHGFk8qjzw7oPS4-rcXv4fkFsT4tU9psLBQQIf3DMuWckXt3k6e2FoR07pCZYQdlICz_yobiSvJjFjqwEiFYIcDyutyp8tCe0O_Ng"
              />
            </div>
            <h1 className="title">Jane Doe</h1>
            <p className="subtitle">jane.doe@example.com</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Personal Information</h3>
                <p className={styles.sectionDescription}>Your personal details.</p>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.fieldGroup}>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>Full Name</label>
                    <p className={styles.fieldValue}>Jane Doe</p>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>Email Address</label>
                    <p className={styles.fieldValue}>jane.doe@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className={styles.divider} />

            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>AI Recommendations</h3>
                <p className={styles.sectionDescription}>Tailor event suggestions to your taste.</p>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.fieldGroup}>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>Favorite Genres</label>
                    <div className={styles.tagsContainer}>
                      <span className={`${styles.tag} ${styles.tagActive}`}>Indie Rock</span>
                      <span className={`${styles.tag} ${styles.tagActive}`}>Electronic</span>
                      <span className={styles.tag}>Pop</span>
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>Preferred Event Types</label>
                    <div className={styles.tagsContainer}>
                      <span className={`${styles.tag} ${styles.tagActive}`}>Concerts</span>
                      <span className={`${styles.tag} ${styles.tagActive}`}>Festivals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};