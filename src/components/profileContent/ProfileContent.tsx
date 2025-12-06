import styles from "./ProfileContent.module.css";
import "../../App.css";
import { useAuth } from "@/contexts/AuthContext";

export const ProfileContent = () => {
  const { user } = useAuth();

  return (
    <div className={styles.profileContainer}>
      <main className={`${styles.mainContent} ${styles.floatUp}`}>
        <div className={styles.contentWrapper}>
          <div className={styles.profileHeader}>
            <div className={styles.avatarWrapper}>
              <img
                alt="User profile picture"
                className={styles.avatar}
                src={
                  user?.user_metadata.avatar_url ||
                  user?.user_metadata.picture ||
                  "/images/user_default_image.png"
                }
              />
            </div>
            <h1 className="title">
              {user?.user_metadata.name || user?.user_metadata.full_name}
            </h1>
            <p className="subtitle">Verified Member</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Personal Information</h3>
                <p className={styles.sectionDescription}>
                  Your personal details.
                </p>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.fieldGroup}>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>Full Name</label>
                    <p className={styles.fieldValue}>
                      {user?.user_metadata.full_name ||
                        user?.user_metadata.name}
                    </p>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>Email Address</label>
                    <p className={styles.fieldValue}>{user?.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className={styles.divider} />

            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>AI Recommendations</h3>
                <p className={styles.sectionDescription}>
                  Tailor event suggestions to your taste.
                </p>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.fieldGroup}>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>Favorite Genres</label>
                    <div className={styles.tagsContainer}>
                      <span className={`${styles.tag} ${styles.tagActive}`}>
                        Indie Rock
                      </span>
                      <span className={`${styles.tag} ${styles.tagActive}`}>
                        Electronic
                      </span>
                      <span className={styles.tag}>Pop</span>
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>
                      Preferred Event Types
                    </label>
                    <div className={styles.tagsContainer}>
                      <span className={`${styles.tag} ${styles.tagActive}`}>
                        Concerts
                      </span>
                      <span className={`${styles.tag} ${styles.tagActive}`}>
                        Festivals
                      </span>
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
