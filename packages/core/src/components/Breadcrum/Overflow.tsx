import React, { useState, useRef, useEffect } from 'react';
import { Arrow } from 'icons';
import ClickManager from '../ClickManager';
import Colors from 'colors';
import { ThemeType } from '../../utils/theme';
import classNames from '../../utils/classNames';
import styles from './index.module.scss';
import OverflowManager from '../OverflowManager';
import OverflowButton from './OverflowButton';


interface OverflowProps {
  /** 
   * A light or dark theme for the hidden menu. 
   */
  theme?: ThemeType
  /** 
   * Aria label for the overflow button. 
   */ 
  ariaLabel?: string;
  /**
   * A selector used in testing environments.
   * 
   * This should ONLY be used in a testing 
   * environment; otherwise, the <OverflowManager />
   * component will not work as intended.
   */
  dataTestId?: string;
  /** 
   * Link elements to be displayed in a hidden menu. 
   */
  children: React.ReactNode[]
}

export default function Overflow({
  theme = "light",
  ariaLabel,
  dataTestId,
  children
}: OverflowProps): JSX.Element 
{
  const [visible, setVisible] = useState(false);
  const [aboveTarget, setAboveTarget] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const MENU_OFFSET = 11; // For transition effect

  const positionMenu = (menu: HTMLElement | undefined | null) => {
    if (!menu) return;
    
    menu.style.top = `-${menu.clientHeight - MENU_OFFSET}px`;
    setAboveTarget(true);
  }

  const toggleVisibility = () => {
    setVisible(!visible);

    if (menuRef.current) {
      menuRef.current.style.top = '';
    }
  }

  const handleOutsideClick = () => {
    visible && setVisible(false);
  }

  useEffect(() => {
    if (!visible) setAboveTarget(false);
  }, [visible]);

  return (
    <ClickManager ref={divRef} onClick={handleOutsideClick}>
      <OverflowManager 
        ref={menuRef} 
        isVisible={!dataTestId && visible}
        onOverflow={() => positionMenu(menuRef.current)} 
        onVisible={() => setAboveTarget(false)}
        updateParameters={[visible]}
      >
        <span 
          className={styles.overflow} 
          data-testid={dataTestId}
        >
          <OverflowButton 
            selected={visible}
            theme={theme}
            onClick={toggleVisibility}
            ariaLabel={ariaLabel}
          />
          <Arrow 
            direction="right" 
            color={Colors.grayScale.GRAY3} 
          />
          <div 
            className={classNames(
              styles.menu, 
              styles[theme],
              visible     && styles.visible,
              aboveTarget && styles.openUp
            )}
            ref={menuRef}
          >
            {children}
          </div>
        </span>
      </OverflowManager>
    </ClickManager>
  )
}

Overflow.displayName = 'BreadcrumOverflow';