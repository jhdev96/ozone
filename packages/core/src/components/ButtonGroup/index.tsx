import React, { Children } from 'react';
import classNames from '../../utils/classNames';
import { ThemeType } from '../../utils/theme';
import styles from './index.module.scss';


export interface ButtonGroupProps {
  /** 
   * Gives the group rounded corners. 
   */
  rounded?: boolean;
  /** 
   * Gives the group a light or dark theme. 
   */
  theme?: ThemeType;
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
  /** 
   * Content to be rendered inside ButtonGroup. 
   */
  children?: React.ReactNode[];
}

export default function ButtonGroup({ 
  rounded   = true,
  theme     = 'light',
  dataTestId,
  children
}: ButtonGroupProps): JSX.Element 
{
  const childMarkup = Children.map(children, (child, index) => (
    <div className={styles.button} key={index}>
      {child}
    </div>
  ));
  
  return (
    <div 
      className={classNames(
        styles.buttonGroup,
        rounded && styles.rounded,
        styles[theme]
      )}
      data-testid={dataTestId}
    >
      {childMarkup}
    </div>
  );
}

ButtonGroup.displayName = 'ButtonGroup';