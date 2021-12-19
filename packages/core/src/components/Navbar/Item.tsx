import React from 'react';
import styles from './index.module.scss';


interface ItemProps {
  /** 
   * Function that is called when an
   * item is clicked.
   */
  onClick?: (name?: string) => void;
  /**
   * A name for the item.
   */ 
  name?: string;
  /** 
   * The content rendered inside this component. 
   */
  children?: React.ReactNode;
}
 
export default function Item({
  onClick = () => {},
  name,
  children
}: ItemProps): JSX.Element 
{
  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const classes = e.currentTarget.classList;

    switch (e.currentTarget.tagName.toLowerCase()) {
      case 'a':
        if (classes.contains(styles.disabled) || onClick) {
          e.preventDefault();
        }
        break;
      default:
        onClick(name);
    }
  }

  return (
    <li 
      className={styles.navItem} 
      onClick={handleClick}
    >
      {children}
    </li>
  )
}

Item.displayName = 'NavbarItem';