import React from 'react';
import classNames from '../../utils/classNames';
import styles from './index.module.scss';


export interface ButtonRowProps {
  /** 
   * The placement of the button(s) in the container. 
   */
  placement?: "left" | "center" | "right";
  /** 
   * The buttons that occupy the row. 
   */
  children?: React.ReactNode;
}

export default function ButtonRow({
  placement = "center", 
  children
}: ButtonRowProps): JSX.Element 
{
  return (
    <div 
      className={classNames(
        styles.buttonRow,
        styles[placement]
      )}
    >
      <div>{children}</div>
    </div>
  );
}

ButtonRow.displayName = 'ButtonRow';