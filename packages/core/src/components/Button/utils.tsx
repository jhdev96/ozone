import { LoadingDotsProps } from '../LoadingDots';


export type ButtonVariation = "primary" | "secondary" | "warning" | "basic";

export const loaderTheme = (
  btnType: ButtonVariation, 
  theme: "light" | "dark", 
  outline: boolean
): LoadingDotsProps["theme"] => {
  /** 
   * Sets the theme for the LoadingDots component
   * which is rendered as a child for a button
   * that is loading. 
   * 
   * @param btnType // the type of button wrapping the loader
   * @param theme // the button's theme
   * @param outline // whether the button has just an outline
   * 
   * This function will return
   * an appropriate theme for the LoadingDots
   * component, so that it contrasts with the
   * button.
   */
  switch(btnType) {
    case 'basic':
      if (theme === 'light') return 'dark';
      return 'light';
    case 'primary':
      if (outline) return "blue";
      return theme;
    case 'secondary':
      if (outline) return "red";
      return theme;
    case 'warning':
      return "dark";
    default:
      return theme;
  }
}