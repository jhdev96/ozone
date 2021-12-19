import React from 'react';
import styles from './index.module.scss';


interface Props {
  /**
   * The items inside the navbar.
   * These should be `Item` components. 
   */
  children?: React.ReactNode;
};

export default function Nav({
  children
}: Props): JSX.Element 
{
  return (
    <ul className={styles.navContent}>
      {children}
    </ul> 
  )
}

Nav.displayName = 'NavbarNav';