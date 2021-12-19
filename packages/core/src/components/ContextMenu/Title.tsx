import React from 'react';
import styles from './index.module.scss';


export default function Title({
  children
}: {children?: React.ReactNode}): JSX.Element 
{
  return (
    <div className={styles.menuTitle}>{children}</div>
  )
}

Title.displayName = 'ContextMenuTitle';