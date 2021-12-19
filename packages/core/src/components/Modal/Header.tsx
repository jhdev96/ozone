import React from 'react';
import styles from './index.module.scss';


interface HeaderProps {
  /**
   * Content that will rendered
   * inside of this component.
   */
  children?: React.ReactNode;
}

export default function Header({
  children
}: HeaderProps): JSX.Element 
{
  return (
    <div className={styles.modalHeader}>
      {children}
    </div>
  )
}

Header.displayName = 'ModalHeader';