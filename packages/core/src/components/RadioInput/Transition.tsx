import React from 'react';
import styles from './index.module.scss';


export default function Transition(): JSX.Element 
{
  return (
    <>
      <div className={styles["ripple-outer-ring"]}></div>
      <div className={styles["ripple-inner"]}></div>
    </>
  )
}