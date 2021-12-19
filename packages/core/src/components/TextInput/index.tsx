import React, { useState, useRef, LegacyRef } from 'react';
import classNames from '../../utils/classNames';
import { 
  InputType, 
  toggleFocus, 
  makeRegexPattern,
  withinMinMaxBoundary 
} from './utils';
import BaseTextProps from '../../utils/BaseTextProps';
import { Preview as PreviewIcon } from 'icons';
import { Hide as HideIcon } from 'icons';
import Colors from 'colors';
import styles from './index.module.scss';


interface TextInputProps extends BaseTextProps<HTMLInputElement> {
  /** 
   * The type of data being input. 
   */
  type?: InputType;
  /** 
   * The current value of the input. 
   */
  value?: string | number;
  /**
   * A lower boundary for numeric inputs.
   */
  minValue?: number;
  /**
   * An upper boundary for numeric inputs.
   */
  maxValue?: number
  /** 
   * If true, a user will be able to clear the input's contents. 
   */
  withClearButton?: boolean;
  /** 
   * A regex pattern against which to check for 
   * validating the input. 
   */
  pattern?: RegExp;
  /** 
   * Sets the HTML `autoComplete` attribute of the input element. 
   */ 
  autoComplete?: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  /** 
  * Function that is called when the input gains focus. 
  */
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
  /** 
   * Called when the input loses focus. 
   */
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  /**
   * Called when the input's value is validated. 
   * 
   * The consumer of this component should use this 
   * function to update the `hasError` prop. 
   */
  validate?: (valid: boolean) => void;
  /** 
   * Icon to be placed on the left side of the input. 
   */
  icon?: React.ReactNode;
  /**
   * A selector used in test environments.
   */
  dataTestId?: string;
  /** 
   * A validation message that is displayed below the input. 
   * This is useful for helping users correct errors.
   */
  children?: React.ReactNode;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput({
    type             = 'text',
    theme            = 'light',
    value            = '',
    hasError         = false,
    isRequired       = false,
    isDisabled       = false,
    minValue,
    maxValue,
    withClearButton  = false,
    pattern          = makeRegexPattern(type),
    autoFocus        = false,
    autoComplete,
    onChange         = () => {},
    onFocus          = () => {},
    onBlur           = () => {},
    onKeyDown        = () => {},
    onKeyPress       = () => {},
    onKeyUp          = () => {},
    validate         = () => {},
    icon,
    name,
    placeholder,
    dataTestId,
    children}: TextInputProps,
    ref: React.ForwardedRef<HTMLInputElement>): JSX.Element 
  {
    const [inputVal, setInputVal] = useState<string | number>(value);
    const [hidePassword, setHidePassword] = useState(true);
    const [inputType, setInputType] = useState(type);
    const wrapperRef = useRef<HTMLDivElement>();

    const checkAutoFill = (newVal: string) => {
      /**
       * Check if the input has been autofilled.
       * If so, add a special class to the input
       * which visually indicates that it has 
       * been autofilled.
       */
      if (!wrapperRef.current) return;

      const classList = wrapperRef.current.classList;

      if (newVal.length - inputVal.toString().length > 1) {
        classList.add(styles.autofill);
      } else {
          classList.remove(styles.autofill);
      }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.target;
      const isValid = pattern.test(target.value);

      checkAutoFill(target.value.toString());

      if (type === 'number' &&
          !withinMinMaxBoundary(
            minValue, 
            maxValue, 
            parseInt(target.value))
          ) 
          return;

      setInputVal(target.value)
      validate(isValid);
      onChange(e, target.value);
    }

    const clear = () => {
      if (!wrapperRef.current) return;

      const classList = wrapperRef.current.classList;
      
      if (classList.contains(styles.autofill)) {
        classList.remove(styles.autofill);
      }
      setInputVal('');
    }

    const handleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
      toggleFocus(e);
      onFocus(e);
    }

    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
      toggleFocus(e);
      onBlur(e);
    }

    const togglePassword = () => {
      const newInputType = inputType === 'password' 
        ? 'text' 
        : 'password';
        
      setHidePassword(!hidePassword);
      setInputType(newInputType);
    }

    const passwordIconMarkup = type === 'password' && (
      <span 
        className={styles.togglePassword}
        onClick={() => togglePassword()}
      >
        {hidePassword 
          ? <HideIcon color={Colors.grayScale.GRAY4} size="md" />
          : <PreviewIcon color={Colors.grayScale.GRAY4} size="md" />
        }
      </span>
    );

    const clearButtonMarkup = withClearButton && (
      <span onClick={clear} className={styles.clearBtn}>
        &times;
      </span>
    );

    return (
      <>
        <div
          ref={wrapperRef as LegacyRef<HTMLDivElement>}
          onFocus={(e) => handleFocus(e)}
          onBlur={(e) => handleBlur(e)}
          className={classNames(
            styles.inputWrapper, 
            styles[type],
            styles[theme], 
            hasError    && styles.error, 
            isDisabled  && styles.disabled
          )}
          data-testid={dataTestId}
        >
          <span className={styles.icon}>{icon}</span>
          <input
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            className={styles.input} 
            type={inputType} 
            name={name} 
            value={inputVal} 
            required={isRequired} 
            disabled={isDisabled} 
            placeholder={placeholder} 
            onChange={handleChange}
            onKeyDown={onKeyDown}
            onKeyPress={onKeyPress}
            onKeyUp={onKeyUp}
            ref={ref}
          />
          {passwordIconMarkup}
          {clearButtonMarkup}
        </div>
        <span className={styles.validationMssg}>
          {children}
        </span>
      </>
    );
  }
)

export default TextInput;

TextInput.displayName = 'TextInput';