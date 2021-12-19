import React, { useState, useEffect, LegacyRef } from 'react';
import { ThemeType } from '../../utils/theme';
import classNames from '../../utils/classNames';
import Item from './Item';
import Break from './Break';
import Title from './Title';
import Body from './Body';
import ClickManager from '../ClickManager';
import styles from './index.module.scss';


interface ContextMenuProps {
  /** 
   * The element id of the element which 
   * triggers the menu. 
   */ 
  targetId?: string;
  /** 
   * Gives the menu a light or dark theme. 
   */
   theme?: ThemeType;
  /**
   * A function that is called when the context menu
   * is visible.
   */
  onShow?: () => void;
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
  /** 
   * The menu content. 
   */
  children?: React.ReactNode;
};

interface Position {
  /** 
   * The menu's horizontal position on the screen. 
   */
  x: number, 
  /** 
   * The menu's vertical position on the screen. 
   */
  y: number, 
  /** 
   * Determines if the menu displays above or below the 
   * the point where the target element was clicked.
   * This is set to true if the menu falls outside the
   * viewport.
   */
  aboveMouse: boolean
};

export default function ContextMenu ({
  targetId,
  theme   = 'light',
  onShow  = () => {},
  dataTestId,
  children
}: ContextMenuProps): JSX.Element 
{
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState<Position>({
    x: 0, 
    y: 0, 
    aboveMouse: false
  });
  const menuRef = React.useRef<HTMLDivElement>();
  const wrapperRef = React.useRef<HTMLDivElement>();

  useEffect(() => {
    document.addEventListener(
      "contextmenu", 
      handleContextMenu
    );

    return () => {
      document.removeEventListener(
        "contextmenu",
        handleContextMenu
      );
    }
  }, [visible]);

  const handleClick = () => {
    if (visible) {
      setVisible(false); 
      setPos({...pos, aboveMouse: false});
    }
    
    document.body.style.overflowY = "scroll";
  }

  function handleContextMenu(this: Document, e: MouseEvent) 
  {
    const menu = menuRef.current;

    if (!menu) return;

    const menuYPos = e.clientY + menu.offsetHeight;
    const target = e.target as HTMLElement;
    
    if (targetId && target.id !== targetId) {
      setVisible(false);
      return;
    }

    e.preventDefault();
    setPos({...pos, x: e.clientX, y: e.clientY});
    if (menuYPos >= window.visualViewport?.height) {
      /**
       * The `visualViewport` property may not be
       * defined in testing environments, so
       * optional chaining is used here.
       */
      setPos({
        x: e.clientX, 
        y: e.clientY - menu.offsetHeight, 
        aboveMouse: true
      });
    } else {
        setPos({x: e.clientX, y: e.clientY, aboveMouse: false});
    }

    setVisible(true);
    
    onShow();
    
    // Prevent the user from scrolling when the menu is visible.
    document.body.style.overflowY = "hidden";
  };

  return (
    <ClickManager ref={wrapperRef} onClick={handleClick}>
      <div 
        className={classNames(
          styles.menu, 
          styles[theme], 
          visible         && styles.visible,
          pos.aboveMouse  && styles.openUp
        )} 
        onContextMenu={e => e.preventDefault()}
        style={{top: pos.y, left: pos.x}}
        ref={menuRef as LegacyRef<HTMLDivElement>}
        data-testid={dataTestId}
      >
        {children}
      </div>
    </ClickManager>
  );
}
 
ContextMenu.Item = Item;
ContextMenu.Break = Break;
ContextMenu.Title = Title;
ContextMenu.Body = Body;
ContextMenu.displayName = 'ContextMenu';