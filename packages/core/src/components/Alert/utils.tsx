import React from 'react';
import LoadingDots from '../LoadingDots';
import { Info } from '@jhdev96/ozone-icons';
import { Warning } from '@jhdev96/ozone-icons';
import { Success } from '@jhdev96/ozone-icons';
import { Error } from '@jhdev96/ozone-icons';
import Colors from '@jhdev96/ozone-colors';


export type AlertVariation =  "progress"  | 
                              "info"      | 
                              "warning"   | 
                              "success"   | 
                              "error";

export const IconColor = {
  success: Colors.extended.GREEN2,
  error: Colors.extended.RED2,
  info: Colors.extended.BLUE5,
  warning: Colors.extended.YELLOW2,
  progress: Colors.grayScale.BLACK2
}

export const alertIcon = (
  Type: AlertVariation, 
  theme?: 'light' | 'dark'
): JSX.Element => {
  /**
   * Given an alertType and a color theme, 
   * return the appropriate icon for the alert.
   */
  theme ||= 'light';

  switch (Type) {
    case 'success': 
      return (
        <Success 
          color={IconColor.success} 
          className="successIcon"
        />
      );
    case 'warning': 
      return (
        <Warning 
          color={IconColor.warning} 
          className="warningIcon"
        />
      );
    case 'error': 
      return (
        <Error 
          color={IconColor.error} 
          className="errorIcon"
        />
      );
    case 'progress':
      return (
        <LoadingDots 
          theme={
            theme === 'light' 
              ? 'dark' 
              : 'light'
          } 
          position="left" 
          dotSize={6} 
          className="progressIcon"
        />
      );

    default: 
      return (
        <Info 
          color={IconColor.info} 
          className="infoIcon" 
        />
      );
  }
}