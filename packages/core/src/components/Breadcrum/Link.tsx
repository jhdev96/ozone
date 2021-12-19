import React from 'react';
import { Arrow } from 'icons';
import classNames from '../../utils/classNames';
import Colors from 'colors';
import styles from './index.module.scss';


export interface LinkProps {
  /** 
   * Indicates visually whether the path is active. 
   */
  isActive?: boolean;
  /** 
   * Function that is called when a path is clicked. 
   */
  onClick?: () => void;
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
  /** 
   * Content to render inside a path. 
   */
  children?: React.ReactNode;
}

export default function Link({ 
  isActive = false, 
  onClick,
  dataTestId,
  children
}: LinkProps): JSX.Element 
{
  return (
    <>
      <button
        onClick={onClick} 
        className={classNames(
          styles.link, 
          isActive && styles.active
        )} 
        data-testid={dataTestId}
      >
        {children}
      </button>
      {!isActive && (
        <Arrow 
          direction="right" 
          color={Colors.grayScale.GRAY3} 
        />
      )}
    </>
  )
};

Link.displayName = 'BreadcrumLink';