import React, { useState, useEffect, LegacyRef } from 'react';
import { MenuContext } from './context';
import { ThemeType } from '../../utils/theme';
import Item from './Item';
import classNames from '../../utils/classNames';
import styles from './index.module.scss';


interface FormMenuProps {
  /** 
   * Modifies the menu's visual appearance for 
   * light and dark themes. 
   */
  theme?: ThemeType;
  /** 
   * Sets the active item. 
   */
  activeItem: string;
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
  /** 
   * The menu items to be rendered inside the form menu. 
   */
  children?: React.ReactNode;
}

export default function FormMenu({
  theme = "light",
  activeItem,
  dataTestId,
  children
}: FormMenuProps): JSX.Element 
{
  const menuSlider = React.useRef<HTMLDivElement>();
  const STARTING_Y_POS = 7;
  const [active, setActive] = useState({
    name: activeItem, 
    yPos: STARTING_Y_POS,
    deltaY: 0,
    menuSlider
  });

  useEffect(() => {
    setActive({...active, name: activeItem});
  }, [activeItem]);

  return (
    <div 
      className={classNames(
        styles.formMenu, 
        styles[theme]
      )}
      data-testid={dataTestId}
    >
      <MenuContext.Provider value={[active, setActive]}>
        <div className={styles.sliderWrapper}>
          <div 
            className={classNames(styles.slider)} 
            style={{marginTop: active.yPos}} 
            ref={menuSlider as LegacyRef<HTMLDivElement>}
          />
        </div>
        <div className={styles.items}>{children}</div>
      </MenuContext.Provider>
    </div>
  )
}

FormMenu.Item = Item;
FormMenu.displayName = 'FormMenu';