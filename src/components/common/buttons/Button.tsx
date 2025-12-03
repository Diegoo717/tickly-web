import React from "react";
import styles from "./Button.module.css";
import { NavLink } from "react-router";

interface Props {
  text: string;
  active: boolean;
  link?: string;
  onClick?: () => void;
  width?: string;
  height?: string;
}

export const Button = ({ 
  text, 
  active, 
  onClick, 
  link = "",
  width,
  height 
}: Props) => {
  const customStyle: React.CSSProperties = {
    ...(width && { width }),
    ...(height && { height })
  };

  const buttonElement = (
    <button
      onClick={onClick}
      className={active ? styles.buttonActive : styles.button}
      style={customStyle}
    >
      {text}
    </button>
  );

  if (onClick && !link) {
    return buttonElement;
  }

  return (
    <NavLink className={styles.navLink} to={`/${link}`}>
      {buttonElement}
    </NavLink>
  );
};