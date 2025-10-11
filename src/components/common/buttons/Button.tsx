import React from 'react'
import styles from './Button.module.css'

interface Props{
    text: string,
    active: boolean,
    onClick?: () => void;
}

export const Button = ({text, active, onClick}:Props) => {
  return (
    <button onClick={onClick} className={active ? styles.buttonActive : styles.button}>
        {text}
    </button>
  )
}
