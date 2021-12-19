import React from 'react';
import classNames from '../../utils/classNames';
import { ThemeType } from '../../utils/theme';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardTitle from './CardTitle';
import styles from './index.module.scss';


export interface CardProps {
  /** 
   * The type of card being rendered. 
   */
  variation?: "primary" | "basic";
  /** 
   * Gives the card a light or dark appearance. 
   */
  theme?: ThemeType;
  /** 
   * Adds padding to the body of the card. 
   */
  pad?: boolean;
  /** 
   * Determines how much space a card occupies in its container. 
   */
  width?: "narrow" | "wide" | "full";
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
  /** 
   * The content rendered inside the card. 
   */
  children?: React.ReactNode;
}

export default function Card({
  variation   = "primary",
  theme       = "light",
  pad         = true,
  width       = "wide",
  dataTestId,
  children
}: CardProps): JSX.Element
{
  return (
    <div 
      className={classNames(
        styles[variation],
        styles[theme],
        pad && styles.padding,
        styles[width]
      )}
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Body = CardBody;

Card.displayName = 'Card';