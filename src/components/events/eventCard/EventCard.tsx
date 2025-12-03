import React, { useState } from "react";
import styles from "./EventCard.module.css";
import { Button } from "../../common/buttons/Button";

interface Props {
  urlImage: string;
  title: string;
  place: string;
  date: DateTime;
}

export interface DateTime {
  year: number;
  month: string;
  day: number;
  hour: number;
  minute: number;
}

export const EventCard = ({ urlImage, title, place, date }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.topElement}>
        <h2>{date.month}</h2>
        <p>{date.day}</p>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={urlImage} alt={title} />
      </div>
      <div className={styles.infoContainer}>
        <h1
          className={styles.title}
          title={title} 
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {title}
        </h1>
        {showTooltip && title.length > 40 && (
          <div className={styles.tooltip}>{title}</div>
        )}
        <p className={styles.place} title={place}>
          {place}
        </p>
        <div className={styles.buttonWrapper}>
          <Button text="View details" active={true} width="210px" height="40px" />
        </div>
      </div>
    </div>
  );
};