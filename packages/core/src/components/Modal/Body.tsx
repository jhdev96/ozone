import React from 'react';
import styles from './index.module.scss';


interface Props {
  /**
   * Content that will rendered
   * inside of this component.
   */
  children?: React.ReactNode;
}

export default function Body({children}: Props): JSX.Element 
{
  return (
    <div className={styles.modalBody}>
      {children}
    </div>
  );
}

Body.displayName = 'ModalBody';