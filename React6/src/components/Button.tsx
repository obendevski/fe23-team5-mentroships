import React from 'react'
import styles from './Button.module.css'

interface Props {
    title: string;
    onClick: () => void;
}

export const Button = ({title, onClick}: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>{title}</button>
  )
}
