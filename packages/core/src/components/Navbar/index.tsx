import React from 'react';
import classNames from '../../utils/classNames';
import { ThemeType } from '../../utils/theme';
import Item from './Item';
import Link from './Link';
import Nav from './Nav';
import Brand from './Brand';
import Toggle from './Toggle';
import Collapse from './Collapse';
import styles from './index.module.scss';


interface NavbarProps {
  /** 
   * Determines if links are displayed vertically or horizontally. 
   */ 
  orientation?: "horizontal" | "vertical";
  /** 
   * Positions the navbar brand and the items. 
   */ 
  justify?: "start" | "end" | "center" | "space-between";
  /** 
   * Gives the navbar a light or dark theme. 
   */ 
  theme?: ThemeType;
  /** 
   * Determines what screen size should trigger responsiveness. 
   * This should be used along with a Navbar.Collapse component.
   */ 
  expand?: "sm" | "md" | "lg";
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
  /** 
   * The content displayed inside the navbar. 
   */
  children?: React.ReactNode;
};

export default function Navbar({
  orientation = "horizontal",
  justify     = "start",
  theme       = "light",
  expand      = "lg",
  dataTestId,
  children
}: NavbarProps): JSX.Element 
{
  return (
    <nav 
      className={classNames(
        styles.nav,
        styles[orientation],
        styles[justify],
        styles[theme],
        styles[expand]
      )}
      data-testid={dataTestId}
    >
      {children} 
    </nav>
  );
}

Navbar.Item = Item;
Navbar.Link = Link;
Navbar.Nav = Nav;
Navbar.Brand = Brand;
Navbar.Collapse = Collapse;
Navbar.Toggle = Toggle;

Navbar.displayName = 'Navbar';