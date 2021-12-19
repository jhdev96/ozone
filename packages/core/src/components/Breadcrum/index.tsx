import React from 'react';
import Link from './Link';
import Overflow from './Overflow';
import styles from './index.module.scss';


interface BreadcrumProps {
  /** 
   * A selector used in testing environments. 
   */
  dataTestId?: string;
  /** 
   * Content to render inside a path. 
   */
  children?: React.ReactNode | React.ReactNode[];
}

export default function Breadcrum({
  dataTestId,
  children
}: BreadcrumProps): JSX.Element 
{
  return (
    <nav 
      className={styles.breadcrum} 
      data-testid={dataTestId}
    >
      {children}
    </nav>
  )
}

Breadcrum.Overflow = Overflow;
Breadcrum.Link = Link;
Breadcrum.displayName = 'Breadcrum';