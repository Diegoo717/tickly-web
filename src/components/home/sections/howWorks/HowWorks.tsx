import React from "react";
import style from "./HowWorks.module.css";
import { Button } from "../../../common/buttons/Button";
import ScrollStack, {
  ScrollStackItem,
} from "../../cards/scrollStack/ScrollStack";

export const HowWorks = () => {
  return (
    <section className={style.howWorksContainer}>
      <div className={style.infoContainer}>
        <h1 className={style.title}>How Tickly Works</h1>
        <p className={style.paragraph}>
          Discovering your next event is as easy as 1-2-3.
        </p>
      </div>
      <div className={style.scrollStackContainer}>
        <ScrollStack itemDistance={300}>
          <ScrollStackItem itemClassName={style.cardPurple}>
            <div className={style.iconContainer}>
              <span className="material-symbols-outlined">search</span>
            </div>
            <h2 className={style.itemTitle}>1. Discover with AI</h2>
            <p className={style.itemDescription}>
              Tell us what you're looking for, and our smart AI will sift through thousands of events to find your perfect match. Whether it's a concert, festival, or intimate gathering, we'll help you discover experiences tailored to your taste.
            </p>
          </ScrollStackItem>
          <ScrollStackItem itemClassName={style.cardLavender}>
            <div className={style.iconContainer}>
              <span className="material-symbols-outlined">confirmation_number</span>
            </div>
            <h2 className={style.itemTitle}>2. Secure Your Ticket</h2>
            <p className={style.itemDescription}>
              Easily purchase your tickets through our secure platform. Your spot is guaranteed in just a few clicks. We handle all the details so you can focus on getting excited about your upcoming event.
            </p>
          </ScrollStackItem>
          <ScrollStackItem itemClassName={style.cardViolet}>
            <div className={style.iconContainer}>
              <span className="material-symbols-outlined">celebration</span>
            </div>
            <h2 className={style.itemTitle}>3. Enjoy the Show</h2>
            <p className={style.itemDescription}>
              Access your tickets directly from your device. Just show up, scan, and enjoy an unforgettable experience. No printing required—everything you need is right in your pocket, ready to go.
            </p>
          </ScrollStackItem>
          <ScrollStackItem itemClassName={style.cardButton}>
            <Button text="Try With a Prompt!" active={true} />
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </section>
  );
};