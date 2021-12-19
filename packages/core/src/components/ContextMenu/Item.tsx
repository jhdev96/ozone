import React from 'react';
import styles from './index.module.scss';


interface ItemProps {
  /**
   * Sets the `id` attribute for 
   * the HTML li element.
   */
  id?: string;
  /** 
   * A function that is called when the
   * item component is clicked.
   */ 
  onClick?: (name?: string) => void;
  /** 
   * A name for the item. This should
   * be used along with the onClick 
   * function.
   */
  name?: string;
  /** 
   * The content rendered inside the
   * item component.
   */
  children?: React.ReactNode;
}

export default function Item({
  id,
  onClick = () => {}, 
  name,
  children
}: ItemProps): JSX.Element 
{
  return (
    <li 
      id={id}
      className={styles.menuItem} 
      onClick={() => onClick(name)}
    >
      {children}
    </li>
  )
}

Item.displayName = 'ContextMenuItem';