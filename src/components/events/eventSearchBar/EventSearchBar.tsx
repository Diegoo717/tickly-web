import React from "react";
import { Button } from "../../common/buttons/Button";
import styles from './EventSearchBar.module.css'

interface Props{
  placeHolder: string,
  textButton: string,
  animation: boolean
}

export const EventSearchBar = ( {placeHolder, textButton, animation}: Props) => {
  return (
    <div className={animation ? `${styles.inputWrapper} ${styles.floatUp} ${styles.stagger2}` : styles.inputWrapper}>
      <img src="/icons/search_icon.png" alt="Search Icon" />
      <input
        className={styles.inputSearch}
        placeholder={placeHolder}
        type="text"
      />
      <Button text={textButton} active={true} link="discoverevents" />
    </div>
  );
};