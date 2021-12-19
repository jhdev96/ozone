import React, { useState, useEffect, LegacyRef } from 'react';
import classNames from '../../utils/classNames';
import { ThemeType } from '../../utils/theme';
import { Position, positionPopper } from './utils';
import ClickManager from '../ClickManager';
import styles from './index.module.scss';

 
export interface PopoverProps {
  /** 
   * Determines where the popover
   * is displayed relative to the
   * child element.
   */ 
  position?: Position;
  /** 
   * The content that will be rendered
   * on the popover itself. This is 
   * not to be confused with the `children` 
   * prop which sets the trigger element.
   */ 
  content?: React.ReactNode;
  /**
   * Allows a consumer of this component
   * to determine if the popover should
   * be visible to begin with.
   */ 
  isVisible?: boolean;
  /**
   * Function that is called when the popover
   * is visible.
   */ 
  onShow?: () => void;
  /** 
   * Called when the popover disappears.
   */ 
  onHide?: () => void;
  /** 
   * Give the popover a light or dark appearance.
   */ 
  theme?: ThemeType;
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
  /**
   * The trigger element for the popover. 
   * When this element is clicked, the popover's
   * visibility will change.
   */
  children: React.ReactNode;
}

interface FadeState {in: boolean, out: boolean};
export default function Popover({
  position  = "bottom",
  content,
  isVisible = false,
  onShow    = () => {},
  onHide    = () => {},
  theme     = "light",
  dataTestId,
  children
}: PopoverProps): JSX.Element 
{
  const [visible, setVisible] = useState(isVisible);
  const [fade, setFade] = useState<FadeState>({in: false, out: false});

  const popperRef = React.useRef<HTMLDivElement>();
  const targetRef = React.useRef<HTMLDivElement>();
  const wrapperRef = React.useRef<HTMLDivElement>();
  
  const isFading = fade.in || fade.out;
  let delayFn: ReturnType<typeof setTimeout>;

  const togglePopover = () => {    
    if (!visible) {
      setFade({...fade, in: true});
      setVisible(true);
    } else {
        setFade({...fade, out: true});
        onHide();
    }
  }

  const handleOutsideClick = () => {
    if (visible) togglePopover();
  }

  useEffect(() => {
    visible && onShow();

    if (fade.out) {
      /** 
       * delayFn is used to create a fade
       * transition before the popover's
       * visibility changes. When fade.out 
       * is true this means the popover 
       * should be going away soon.
       */
      delayFn = setTimeout(() => {
        setVisible(false);
        setFade({...fade, out: false});
      }, 100);
    } else if (visible && fade.in) {
      // This ends the fade transition
        delayFn = setTimeout(() => {
          setFade({...fade, in: false});
          positionPopper(targetRef, popperRef, position);
        }, 100);
    }
    return () => clearTimeout(delayFn);
  }, [fade, targetRef.current, popperRef.current]);

  return (
    <ClickManager 
      ref={wrapperRef} 
      className={styles.popoverWrapper} 
      onClick={handleOutsideClick}
      dataTestId={dataTestId}
    >
      <div 
        ref={targetRef as LegacyRef<HTMLDivElement>} 
        onClick={togglePopover}
      >
        {children}
      </div>
      {visible && (
        <div 
          ref={popperRef as LegacyRef<HTMLDivElement>}
          className={classNames(
            styles.popover, 
            styles[position],
            styles[theme],
            isFading && styles.fade
          )}
        >
          {content}
        </div>
      )}
    </ClickManager>
  )
}

Popover.displayName = 'Popover';