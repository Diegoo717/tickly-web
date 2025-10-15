import React from "react";
import style from "./SocialFeature.module.css";
import { ChatRoom } from '../../chatRoom/ChatRoom';

export const SocialFeature = () => {
  return (
    <section className={style.socialFeatureContainer}>
      <div className={style.infoContainer}>
        <article className={style.info}>
          <h1 className={style.infoTitle}>Connect Before The Curtain Rises</h1>
          <p className={style.infoParagraph}>
            Join real-time chat rooms for your event. Socialize with fellow
            attendes, make plans, and get instant help from our AI-powered
            chatbot. The experience starts long before the show.
          </p>
          <div className={style.infoFeatures}>
            <div className={style.featureContainer}>
              <svg
                className={style.featureIcon}
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#7f13ec"
              >
                <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113Z" />
              </svg>
              <div className={style.aditionalContainer}>
                <h2 className={style.featureTitle}>Meet Fellow Fans</h2>
                <p className={style.featureDescription}>
                  Find others who share your passion. Coordinate pre-show
                  meetups or just share your excitement.
                </p>
              </div>
            </div>

            <div className={style.featureContainer}>
              <span
                className={`material-symbols-outlined ${style.featureIcon}`}
              >
                smart_toy
              </span>
              <div className={style.aditionalContainer}>
                <h2 className={style.featureTitle}>AI Assistant on Standby</h2>
                <p className={style.featureDescription}>
                  Have a question about the venue, schedule, or anything else?
                  Our chatbot has the answers.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className={style.chatSection}>
        <ChatRoom />
      </div>
    </section>
  );
};
