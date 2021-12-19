import React from 'react';
import { IconProps } from './utils';


export default function Warning({
  color,
  size  = "sm",
  className
}: IconProps): JSX.Element 
{
  const sizeMap = {
    sm: {width: "4", height: "15"},
    md: {width: "8", height: "19"},
    lg: {width: "12", height: "23"}
  };

  return (
    <>
      <svg 
        id="warning-icon" 
        xmlns="http://www.w3.org/2000/svg" 
        {...sizeMap[size]} 
        viewBox="0 0 4 15"
        className={className}
      >
        <circle 
          id="Ellipse_296" 
          cx="2" 
          cy="2" 
          r="2" 
          transform="translate(0 11)" 
          fill={color} 
        />
        <rect 
          id="Rectangle_1531" 
          width="3" 
          height="10" 
          rx="1.5" 
          transform="translate(0.5)" 
          fill={color} 
        />
      </svg>
    </>
  )
}

Warning.displayName = 'WarningIcon';