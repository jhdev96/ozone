import React, { useState, useEffect } from 'react';
import { PopoverProps } from '../Popover';
import classNames from '../../utils/classNames';
import styles from './index.module.scss';


interface TooltipProps extends PopoverProps {
  /** 
   * The amount of time in milliseconds to wait
   * before showing or hiding the tooltip. 
   */ 
  delay?: number;
  /**
   * If true, the tooltip will fade in and out
   * when its visibility changes.
   */
  animate?: boolean;
}

export default function Tooltip({
  position  = "top",
  delay     = 500,
  content,
  animate   = true,
  isVisible = false,
  onShow    = () => {},
  onHide    = () => {},
  dataTestId,
  children
}: TooltipProps): JSX.Element 
{
  const [visible, setVisible] = useState(isVisible);
  const [fadeOut, setFadeOut] = useState(false);

  let delayFn: ReturnType<typeof setTimeout>;

  const showTooltip = () => {
    delayFn = setTimeout(() => {
      setFadeOut(false);
      setVisible(true);
      onShow();
    }, delay);
  }

  const hideTooltip = () => {
    delayFn = setTimeout(() => {
      setFadeOut(true)
      onHide();
    }, delay);
  }

  useEffect(() => {
    if (fadeOut && visible) {
      delayFn = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
    return () => clearTimeout(delayFn);
  }, [fadeOut])

  return (
    <div 
      className={styles.tooltipWrapper}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      data-testid={dataTestId}
    >
      {children}
      {visible && (
        <div 
          className={classNames(
            styles.tooltip, 
            styles[position],
            animate && fadeOut && styles.fadeOut
          )}
        >
          {content}
        </div>
      )}
    </div>
  )
}

Tooltip.displayName = 'Tooltip';