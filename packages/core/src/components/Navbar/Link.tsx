import React from 'react';
import classNames from '../../utils/classNames';
import styles from './index.module.scss';


export interface LinkProps {
  /** 
   * Sets the `href` attribute for the anchor element. 
   */ 
  to?: string;
  /** 
   * Visually indicates that the link is active.
   */ 
  isActive?: boolean;
  /** 
   * Visually and functionally indicates that the
   * link is disabled. 
   */
  isDisabled?: boolean;
  /** 
   * The link's content.
   */
  children?: React.ReactNode;
}

export default function Link({
  to,
  isActive,
  isDisabled,
  children
}: LinkProps): JSX.Element 
{
  return (
    <a 
      href={to}
      className={classNames(
        styles.navLink, 
        isActive    && styles.active,
        isDisabled  && styles.disabled
      )} 
    >
      {children}
    </a>
  );
}

Link.displayName = 'NavbarLink';