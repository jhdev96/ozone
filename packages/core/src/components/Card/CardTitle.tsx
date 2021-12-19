import React from 'react';
import styles from './index.module.scss';


export default function CardTitle({
  children = "Card Title"
}: {children?: React.ReactNode}): JSX.Element 
{
  return (
    <span className={styles.title}>
      {children}
    </span>
  )
}

CardTitle.displayName = 'CardTitle';