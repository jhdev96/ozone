import React from 'react';
import styles from './index.module.scss';


export const toggleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
  const classList = e.currentTarget.classList;
  
  if (classList.contains(styles.focus)) {
    classList.remove(styles.focus);
  } else {
      classList.add(styles.focus);
  }
}