import React from "react";
import styles from "./Button.module.css";
import { NavLink } from "react-router";

interface Props {
  text: string;
  active: boolean;
  link?: string;
  onClick?: () => void;
}

export const Button = ({ text, active, onClick, link = "" }: Props) => {
  return (
    <NavLink className={styles.navLink} to={`/${link}`}>
      <button
        onClick={onClick}
        className={active ? styles.buttonActive : styles.button}
      >
        {text}
      </button>
    </NavLink>
  );
};
