import React from "react";
import { Button } from "../../common/buttons/Button";
import styles from './EventSearchBar.module.css'

interface Props{
  placeHolder: string,
  textButton: string,
  widht: number,
  height: number
}

export const EventSearchBar = ( {placeHolder, textButton, widht, height}: Props) => {
  return (
    <div style={{width: `${widht}%`, height: `${height}%`}} className={styles.inputWrapper}>
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
