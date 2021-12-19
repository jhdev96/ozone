import { v4 } from 'uuid';
import React, { useContext, useEffect } from 'react';
import { MenuContext } from './context';
import { createTransition } from './utils';
import classNames from '../../utils/classNames';
import styles from './index.module.scss';


export interface ItemProps {
  /** 
   * The unique identifier for the item. 
   */
  id?: string;
  /** 
   * Callback to be invoked when an item is clicked. 
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /** 
   * The name of the item. 
   */
  children?: string;
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  function Item({
    id        = v4(),
    onClick   = () => {},
    children}: ItemProps,
    ref: React.ForwardedRef<HTMLDivElement>): JSX.Element 
  {
    const [activeOption, setActiveOption] = useContext(MenuContext);
    const isActive = activeOption.name === children;

    const makeActive = () => {
      /** 
       * Make the menu option active. This involves
       * updating context data and setting a transition
       * for the menu slider.
       */
      const htmlElem = document.getElementById(id);

      if (!htmlElem) return;

      const dy = activeOption.yPos - htmlElem.offsetTop - 2;

      if (dy !== 0) {
        createTransition(activeOption.menuSlider, dy);
        setActiveOption({
          ...activeOption,
          name: htmlElem.textContent || '', 
          yPos: htmlElem.offsetTop - 2,
          deltaY: dy
        });
      }
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      makeActive();
      onClick(e);
    }

    useEffect(() => {
      isActive && makeActive();
    }, [isActive])

    return (
      <div
        onClick={handleClick}
        id={id}
        className={classNames(
          styles.item,
          isActive && styles.action
        )}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Item;

Item.displayName = 'FormMenuItem';