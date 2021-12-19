import React, { useState, useEffect } from 'react';
import { ThemeType } from '../../utils/theme';
import classNames from '../../utils/classNames';
import Transition from './Transition';
import styles from './index.module.scss';


interface RadioInputProps {
  /** 
   * Control the lightness of the label text and radio border. 
   */
  theme?: ThemeType;
  /** 
   * Indicates whether the box is checked. 
   */
  isChecked?: boolean;
  /** 
   * Adds a 'required' HTML attribute if true. 
   */
  isRequired?: boolean;
  /** 
   * Adds a 'disabled' HTML attribute if true. 
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
  onChange?: (checked: boolean, selected?: string) => void;
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
  /** 
   * content to be rendered beside the box. 
   */ 
  children?: React.ReactNode;
}

const RadioInput = React.forwardRef<HTMLInputElement, RadioInputProps>(
  function RadioInput({ 
    theme       = 'light',
    isChecked   = false, 
    isRequired  = true, 
    isDisabled  = false, 
    hasError    = false,
    onChange    = () => {},
    name,
    dataTestId,
    children}: RadioInputProps,
    ref: React.ForwardedRef<HTMLInputElement>): JSX.Element
  {
    const [checked, setChecked] = useState(isChecked);

    useEffect(() => {
      if (isChecked) setChecked(true);
      else setChecked(false);
    }, [isChecked]);

    const handleChange = () => {
      setChecked(!checked);
      onChange(checked, name);
    }

    const transition = checked && <Transition />;

    return (
      <label 
        className={styles[theme]} 
        data-testid={dataTestId}
      >
        <div 
          className={classNames(
            styles.radioWrapper, 
            hasError && styles.error
          )}>
          <input
            className={styles.input} 
            checked={checked}
            name={name}
            type="radio"
            required={isRequired}
            disabled={isDisabled}
            onChange={handleChange}
            ref={ref}
          />
          <span className={styles.radio}>
            {transition}
          </span>
        </div>
        <span 
          className={classNames(
            styles.text, 
            isDisabled && styles.disabled
          )}
        >
          {children}
        </span>
      </label>
    )
  }
)

export default RadioInput;

RadioInput.displayName = 'RadioInput';