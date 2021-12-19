import React, { useState } from 'react';
import BaseTextProps from '../../utils/BaseTextProps';
import classNames from '../../utils/classNames';
import { ThemeType } from '../../utils/theme';
import styles from './index.module.scss';


export interface TextAreaProps extends BaseTextProps<HTMLTextAreaElement> {
  /**
   * Applies additional css styling to the
   * textarea element.
   */
  className?: string;
  /**
   * Gives the component a light or dark theme.
   */
  theme?: ThemeType;
  /**
   * Sets the HTML `rows` attribute on the textarea
   * element.
   */
  minimumRows?: number;
  /**
   * Sets the HTML `defaultValue` attribute on the textarea
   * element.
   */
  defaultValue?: string;
  /**
   * Applies resize css styling to the textarea element.
   */
  resize?: "none" | "both" | "horizontal" | "vertical" | "auto";
};

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea({
    id,
    className,
    name,
    theme       = "light",
    isDisabled,
    isRequired,
    placeholder,
    hasError    = false,
    onChange    = () => {},
    onFocus     = () => {},
    onBlur      = () => {},
    onKeyDown   = () => {},
    onKeyPress  = () => {},
    onKeyUp     = () => {},
    resize      = "auto",
    minimumRows = 3,
    defaultValue}: TextAreaProps, 
    ref: React.ForwardedRef<HTMLTextAreaElement>): JSX.Element
  {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
      onChange(e, e.target.value);
    }

    return (
      <textarea 
        id={id}
        className={classNames(
          className,
          styles.textarea,
          styles[theme],
          styles[resize],
          hasError && styles.error
        )}
        name={name} 
        disabled={isDisabled}
        required={isRequired}
        ref={ref}
        value={value}
        placeholder={placeholder}
        rows={minimumRows}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
      />
    )
  }
)

TextArea.displayName = 'TextArea';

export default TextArea;