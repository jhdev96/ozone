import React from 'react';
import styles from './index.module.scss';


export default function Body({
  children
}: {children?: React.ReactNode}): JSX.Element 
{
  return (
    <ul className={styles.menuItems}>
      {children}
    </ul>
  )
}

Body.displayName = 'ContextMenuBody';