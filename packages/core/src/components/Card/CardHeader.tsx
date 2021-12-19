import React from 'react';
import styles from './index.module.scss';


export default function CardHeader({
  children
}: {children?: React.ReactNode}): JSX.Element 
{
  return (
    <div className={styles.header}>
      {children}
    </div>
  )
}

CardHeader.displayName = 'CardHeader';