import React from 'react';
import { IconProps } from './utils';


export default function Info({
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
    <svg 
      id="info-icon" 
      xmlns="http://www.w3.org/2000/svg" 
      {...sizeMap[size]}
      viewBox="0 0 4 15"
      className={className}
    >
      <circle 
        id="Ellipse_297" 
        cx="2" 
        cy="2" 
        r="2" 
        fill={color}
      />
      <path 
        id="Rectangle_1532" 
        d="M0,9.559H1A1.957,1.957,0,0,0,3,7.647V0H0Z" 
        transform="translate(0.5 5.441)" 
        fill={color}
      />
    </svg>
  );
}

Info.displayName = 'InfoIcon';