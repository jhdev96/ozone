import React from 'react';
import styles from './index.module.scss';


interface PillProps {
  /** 
   * Main classes for pill components.  
   */
  variation?: "success" | 
              "info"    | 
              "warning" | 
              "error"   | 
              "routine";
  /** 
   * The content rendered inside a pill. 
   */
  children?: React.ReactNode
}

export default function Pill({
  variation = "routine", 
  children
}: PillProps): JSX.Element 
{
  return (
    <span className={styles[variation]}>
      {children}
    </span>
  )
}

Pill.displayName = 'Pill';