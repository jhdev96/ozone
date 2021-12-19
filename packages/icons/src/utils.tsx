export interface IconProps {
  /** 
   * The color to be used as a fill attributed for the svg. 
   */
  color?: string;
  /** 
   * Set the rotation of the icon. 
   */
  direction?: "up" | "right" | "down" | "left";
  /** 
   * Set the size of the icon. 
   */
  size?: "sm" | "md" | "lg";
  /** 
   * Applies custom css styling to the icon. 
   */
  className?: string;
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
};

export const rotationMap = {
  up: "rotate(0deg)",
  down: "rotate(180deg)",
  right: "rotate(90deg)",
  left: "rotate(-90deg)"
};