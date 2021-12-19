import React from 'react';
import classNames from '../../utils/classNames';
import { 
  ButtonVariation,
  loaderTheme
} from './utils';
import LoadingDots from '../LoadingDots';
import styles from './index.module.scss';


export interface ButtonProps {
  /** 
   * The main classes of buttons. 
   */
  variation?: ButtonVariation;
  /** 
   * Sets the HTML `type` attribute for the
   * button element.
   */ 
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
  /** 
   * Control the size of the button. Default is medium. 
   */
  size?: "small" | "medium" | "large";
  /** 
   * Give the button a flat texture, appropriate for forms. 
   */
  flat?: boolean;
  /** 
   * When true the button will no background; 
   * It will only have a border. 
   */
  outline?: boolean;
  /** 
   * When true, the button's width will be 100% of 
   * its container. 
   */ 
  fill?: boolean;
  /** 
   * Color the button based on the current theme. 
   */
  theme?: "light" | "dark";
  /** 
   * Make the button disabled. 
   */
  isDisabled?: boolean;
  /** 
   * Indicates whether the button is loading some content. 
   */
  isLoading?: boolean;
  /** 
   * Sets the `className` attribute on the button element. 
   */ 
  className?: string;
  /** 
   * The function that handles click events. 
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Called when the user's mouse hovers over the button.
   */
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Called when the user's mouse hovers away from the
   * button.
   */
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  /** 
   * A selector used for testing this component. 
   */
  dataTestId?: string;
  /** 
   * Content displayed inside the button. 
   */
  children?: React.ReactNode | string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({
    variation     = "primary",
    type          = "button",
    size          = "medium", 
    flat          = false,
    outline       = false,
    fill          = false, 
    theme         = "light",
    isDisabled    = false,
    isLoading     = false,
    className,
    onClick       = () => {},
    onMouseEnter  = () => {},
    onMouseLeave  = () => {},
    dataTestId,
    children}: ButtonProps,
    ref: React.Ref<HTMLButtonElement>): JSX.Element 
  {
    const childMarkup = isLoading 
      ? (
          <>
            <LoadingDots 
              dotSize={7} 
              position="center" 
              theme={loaderTheme(variation, theme, outline)} 
            />
            <span style={{opacity: '0'}}>{children}</span>
          </>
        )
      : children;

    return (
      <button
        type={type}
        className={classNames(
          className,
          styles[variation],
          styles[size],
          styles[theme],
          flat        && styles.flat,
          outline     && styles[`${variation}--outline`],
          fill        && styles.fill,
          isLoading   && styles.loading,
          isDisabled  && styles.disabled
        )}
        onClick={isDisabled ? () => {} : onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={isDisabled}
        aria-busy={isLoading}
        data-testid={dataTestId}
        ref={ref}
      >
        {childMarkup}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;