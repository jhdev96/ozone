import { ThemeType } from "./theme";


export default interface BaseTextProps<T = HTMLElement> {
  /** 
   * Give the input element an `id` attribute. 
   */
   id?: string;
   /** 
    * Light or dark theme. 
    */
   theme?: ThemeType;
   /** 
    * The current value of the input. 
    */
   value?: string | number;
   /** 
    * Visually show that an error has occured. 
    */
   hasError?: boolean;
   /** 
    * Sets the `required` attribute of the input element. 
    */
   isRequired?: boolean;
   /** 
    * Prevents the user from interacting with the input. 
    */
   isDisabled?: boolean;
   /** 
    * Sets the `autoFocus` attribute of the input element. 
    */ 
   autoFocus?: boolean;
   /** 
    * Function that is called when the input's value changes. 
    */
   onChange?: (e: React.ChangeEvent<T>, value?: string) => void;
   /** 
    * Function that is called when the input gains focus. 
    */
   onFocus?: (e: React.FocusEvent<T>) => void;
   /** 
    * Called when the input loses focus. 
    */
   onBlur?: (e: React.FocusEvent<T>) => void;
   /**
    * Called when a key is pressed down with the input focused.
    */
   onKeyDown?: (e: React.KeyboardEvent<T>) => void;
   /**
    * Called when a key is released with the input focused.
    */
   onKeyUp?: (e: React.KeyboardEvent<T>) => void;
   /**
    * Called while a key is being pressed down with
    * the input focused.
    */
   onKeyPress?: (e: React.KeyboardEvent<T>) => void;
   /**
    * Called when the input's value is validated
    * after being changed. 
    * 
    * The consumer of this component should use this 
    * function to update the `hasError` prop. 
    */
   validate?: (valid: boolean) => void;
   /** 
    * The name to give the input element. 
    */
   name?: string;
   /** 
    * Text to display when the input's value is empty.
   */
   placeholder?: string;
}