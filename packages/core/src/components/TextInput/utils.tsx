import React from 'react';
import styles from './index.module.scss';


export type InputType = 'email' | 'password' | 'text' | 'number';
export const toggleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
  const classList = e.currentTarget.classList;
  
  if (classList.contains(styles.focus)) {
    classList.remove(styles.focus);
  } else {
      classList.add(styles.focus);
  }
}

export const makeRegexPattern = (Type: InputType): RegExp => {
  /** 
   * Returns a regex pattern against which to validate
   * an input's value.
   */
  switch (Type) {
    case 'email':
      return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    case 'text':
    case 'password':
      return /./;
    case 'number':
      return /^\d+$/;
  }
}

export const withinMinMaxBoundary = (
  min: number | undefined, 
  max: number | undefined, 
  value: number
): boolean => {
  /**
   * Check if a numeric input value
   * is in the allowed range of input
   * values.
   */
  switch (typeof min) {
    case 'undefined':
      if (max === undefined) {
        return true;
      } else {
          return value <= max;
      }
    case 'number':
      if (max !== undefined) {
        return value >= min && value <= max;
      } else {
          return value >= min;
      }
  }
}