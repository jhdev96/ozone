import React, { useState } from 'react';
import { 
  IconColor, 
  alertIcon, 
  AlertVariation 
} from './utils';
import classNames from '../../utils/classNames';
import { ThemeType } from '../../utils/theme';
import { Close } from 'icons';
import styles from './index.module.scss';


export interface AlertProps {
  /** 
   * The type of alert being delivered. 
   */
  variation?: AlertVariation;
  /** 
   * The theme only applies for progress alerts. 
   */
  theme?: ThemeType;
  /** 
   * Determines if the user can close the alert. 
   */
  canBeClosed?: boolean; 
  /** 
   * Callback to be invoked when the alert is closed. 
   */
  onClose?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * If true, a floating animation will be applied
   * to the alert.
   */
  animate?: boolean;
  /** 
   * Selector used in testing environments. 
   */ 
  dataTestId?: string;
  /** 
   * The message rendered inside the alert. 
   */
  children?: string;
}

export default function Alert({
  variation     = "info", 
  theme         = "light",
  canBeClosed   = true,
  onClose       = () => {},
  animate       = false,
  dataTestId,
  children
}: AlertProps): JSX.Element | null
{
  const [visible, setVisible] = useState(true);
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    setVisible(false);
    onClose(e);
  }

  if (visible) {
    return (
      <div 
        role="alert"
        className={classNames(
          styles[variation],
          styles[`${variation}--${theme}`],
          animate && styles.animate
        )}
        data-testid={dataTestId}
      >
        {alertIcon(variation, theme)}
        <div className={styles.mssg}>
          {children}
        </div>
        {canBeClosed && (
          <div 
            className={styles.closeBtn}
            onClick={handleClose}
          >
            <Close color={IconColor[variation]} />
          </div>
        )}
      </div>
    )
  }
  return null;
}

Alert.displayName = 'Alert';