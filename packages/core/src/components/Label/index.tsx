import React from 'react';
import classNames from '../../utils/classNames';
import { ThemeType } from '../../utils/theme';
import styles from './index.module.scss';


interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * If true, a red asterisk will appear next to the label.
   */
  required?: boolean;
  /**
   * Give the label a light or dark appearance.
   */
  theme?: ThemeType;
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
};

export default function Label({
  theme     = "light",
  required  = false,
  className,
  dataTestId,
  children,
  ...restProps
}: LabelProps): JSX.Element 
{
  const asteriskMarkup = required && (
    <span className={styles.required}>*</span>
  );

  return (
    <label 
      className={classNames(
        className,
        styles.label, 
        styles[theme]
      )}
      data-testid={dataTestId}
      {...restProps}
    >
      {children}
      {asteriskMarkup}
    </label>
  );
}

Label.displayName = 'Label';