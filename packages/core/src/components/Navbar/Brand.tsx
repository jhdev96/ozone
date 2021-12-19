import React from 'react';
import { LinkProps } from './Link';
import styles from './index.module.scss';


export default function Brand({
  to,
  children
}: LinkProps): JSX.Element 
{
  return (
    <a 
      className={styles.navBrand} 
      href={to}
    >
      {children}
    </a>
  )
}

Brand.displayName = 'NavbarBrand';