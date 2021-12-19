import React, { useState } from 'react';
import classNames from '../../utils/classNames';
import { ThemeType } from '../../utils/theme';
import styles from './index.module.scss';


interface CheckboxProps {
  /**
   * Styles the checkbox text to match a light
   * or dark theme.
   */
  theme?: ThemeType;
  /** 
   * Indicates whether the box is checked. 
   */
  isChecked?: boolean;
  /** 
   * Sets the `required` HTML attribute if true. 
   */
  isRequired?: boolean;
  /** 
   * Sets the `disabled` HTML attribute if true. 
   */
  isDisabled?: boolean;
  /** 
   * Indicates visusally that there has been an error. 
   */
  hasError?: boolean;
  /** 
   * Gives a name to the checkbox for tracking input. 
   */
  name?: string;
  /** 
   * Callback to be invoked when a change is detected. 
   */
  onChange?: (checked: boolean, name?: string) => void;
  /**
   * A selector used in testing environments
   */
  dataTestId?: string;
  /** 
   * Content to be rendered beside the box. 
   */ 
  children?: React.ReactNode;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ 
    theme       = 'light',
    isChecked   = false, 
    isRequired  = true, 
    isDisabled  = false, 
    hasError    = false,
    onChange    = () => {},
    name,
    dataTestId,
    children}: CheckboxProps,
    ref: React.ForwardedRef<HTMLInputElement>): JSX.Element
  {
    const [checked, setChecked] = useState(isChecked);

    const handleOnChange = () => {
      setChecked(!checked);
      onChange(checked, name);
    }

    const transition = checked && (
      <div className={styles.checkboxRipple} />
    )

    return (
      <label 
        className={styles.root} 
        htmlFor={name} 
        data-testid={dataTestId}
      >
        <div 
          className={classNames(
            styles.checkboxWrapper, 
            hasError && styles.error
          )} 
          role="checkbox"
        >
          <input
            className={styles.input} 
            type="checkbox"
            name={name}
            checked={checked}
            aria-checked={checked}
            required={isRequired}
            disabled={isDisabled}
            onChange={handleOnChange}
            ref={ref}
          />
          <span className={styles.checkbox}>
            {transition}
          </span>
        </div>
        <span 
          className={classNames(
            styles.text, 
            styles[theme]
          )}
        >
          {children}
        </span>
      </label>
    );
  }
)

export default Checkbox;

Checkbox.displayName = 'Checkbox';