import React from 'react';
import styles from './index.module.scss';


interface TitleProps {
  /** 
   * The content for the title.
   */
  children?: React.ReactNode;
}

export default function Title({
  children
}: TitleProps): JSX.Element 
{
  return (
    <span className={styles.modalTitle}>
      {children}
    </span>
  )
}

Title.displayName = 'ModalTitle';