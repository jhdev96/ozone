import React from 'react';
import classNames from '../../utils/classNames';
import { ThemeType } from '../../utils/theme';
import styles from './index.module.scss';


interface OverflowButtonProps {
  /**
   * A light or dark theme for the button. 
   */
  theme?: ThemeType;
  /**
   * If true, gives the button element
   * a css class to visually indicate
   * that it is currently selected.
   */
  selected?: boolean;
  /** 
   * Aria label for the overflow button. 
   */
  ariaLabel?: string;
  /**
   * A function that fires when the button
   * is clicked.
   */
  onClick?: () => void;
}

export default function OverflowButton({
  theme = "light",
  selected,
  ariaLabel,
  onClick
}: OverflowButtonProps): JSX.Element 
{
  return (
    <button 
      className={classNames(
        styles.dots, 
        styles[theme],
        selected && styles.selected
      )} 
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </button> 
  )
}

OverflowButton.displayName = 'OverflowButton';