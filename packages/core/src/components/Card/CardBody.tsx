import React from 'react';
import styles from './index.module.scss';


export default function CardBody({
  children
}: {children?: React.ReactNode}): JSX.Element 
{
  return (
    <div className={styles.body}>
      {children}
    </div>
  )
}

CardBody.displayName = 'CardBody';