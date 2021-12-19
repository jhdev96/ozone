import React from 'react';
import { IconProps } from './utils';

export default function Cog({
  color,
  size  = "sm",
  className
}: IconProps): JSX.Element 
{
  const sizeMap = {
    sm: {width: "14", height: "14"},
    md: {width: "18", height: "18"},
    lg: {width: "22", height: "22"}
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      {...sizeMap[size]} 
      viewBox="0 0 24.307 25.215" 
      className={className}
    >
      <g id="Component_61_2" transform="translate(0.053 0.055) scale(0.961 1)">
        <path id="Subtraction_11" d="M10.027,19.105A9.809,9.809,0,0,1,0,9.553,9.809,9.809,0,0,1,10.027,0,9.809,9.809,0,0,1,20.054,9.553,9.809,9.809,0,0,1,10.027,19.105Zm0-13.375a3.823,3.823,0,1,0,3.822,3.822A3.827,3.827,0,0,0,10.027,5.73Z" transform="translate(3.063 3)" fill={color} />
        <rect id="Rectangle_1561" width="5" height="4" transform="translate(10.45 21.105)" fill={color} />
        <rect id="Rectangle_1562" width="5" height="4" transform="translate(10.45)" fill={color}/>
        <rect id="Rectangle_1563" width="5.001" height="4" transform="matrix(0.616, 0.788, -0.788, 0.616, 20.59, 2)" fill={color} />
        <rect id="Rectangle_1564" width="4.999" height="4" transform="translate(25.286 10.198) rotate(94)" fill={color} />
        <rect id="Rectangle_1567" width="4.999" height="4" transform="matrix(-0.719, 0.695, -0.695, -0.719, 23.813, 19.578)" fill={color} />
        <rect id="Rectangle_1568" width="5" height="4" transform="matrix(0.719, 0.695, -0.695, 0.719, 4.865, 16.701)" fill={color} />
        <rect id="Rectangle_1569" width="5" height="4" transform="matrix(0.07, 0.998, -0.998, 0.07, 3.99, 9.919)" fill={color} />
        <rect id="Rectangle_1570" width="5.001" height="4" transform="matrix(-0.616, 0.788, -0.788, -0.616, 8.462, 4.462)" fill={color} />
      </g>
    </svg>
  )
}

Cog.displayName = 'CogIcon';