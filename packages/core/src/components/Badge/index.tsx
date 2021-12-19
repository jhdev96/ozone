import React from 'react';
import classNames from '../../utils/classNames';
import styles from './index.module.scss';


export interface BadgeProps {
  /** 
   * Main classes for a badge. 
   */
  variation?: "primary"   | 
              "secondary" | 
              "info"      |
              "success"   | 
              "warning"   | 
              "routine";
  /** 
   * Determine if the shape of the badge is circular. 
   */
  circular?: boolean;
  /** 
   * When true, the badge will be given a css
   * class with a `position: absolute` rule.
   */ 
  absolute?: boolean;
  /** 
   * Provide additional css styling to the badge.
   */ 
  className?: string;
  /** 
   * Determines where the badge is placed relative 
   * to the target element.
   * 
   * This only takes effect when the `position`
   * prop is set to `absolute`.
   */ 
  placement?: "topLeft"     | 
              "topRight"    | 
              "bottomLeft"  | 
              "bottomRight";
  /** 
   * Aria label for screen readers. 
   */ 
  ariaLabel?: string;
  /**
   * A selector used in test environments.
   */
  dataTestId?: string;
  /** 
   * The content rendered inside a badge. 
   */
  children?: React.ReactNode;
};

export default function Badge({
  variation = "routine",
  circular  = false,
  absolute,
  className,
  placement = "topRight",
  ariaLabel,
  dataTestId,
  children
}: BadgeProps): JSX.Element 
{
  return (
    <span 
      className={classNames(
        className,
        styles.badge, 
        styles[variation],
        absolute    && styles.absolute,
        circular    && styles.rounded,
        absolute    && styles[placement]
      )}
      aria-label={ariaLabel}
      data-testid={dataTestId}
    >
      {children}
    </span>
  )
}

Badge.displayName = 'Badge';