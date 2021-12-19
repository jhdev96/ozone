import React from 'react';
import styles from './index.module.scss';


export default function Break(): JSX.Element 
{
  return <hr className={styles.menuBreak} />
}

Break.displayName = 'ContextMenuBreak';