import React from 'react';
import styles from './index.module.scss';


interface CollapseProps {
  /** 
   * An HTML id for the Collapse component. 
   * 
   * This is used to set the target element
   * for the `Toggle` component.
   */
  id: string;
  /**
   * The content rendered inside this
   * component.
   */
  children?: React.ReactNode;
}

export default function Collapse({
  id,
  children
}: CollapseProps): JSX.Element 
{
  return (
    <div id={id} className={styles.navCollapse}>
      {children}
    </div>
  )
}

Collapse.displayName = 'NavbarCollapse';