import React from 'react';
import { IconProps } from './utils';


export default function Plus({
  color,
  size  = "sm",
  className
}: IconProps): JSX.Element 
{
  const sizeMap = {
    sm: {width: "10", height: "10"},
    md: {width: "14", height: "14"},
    lg: {width: "18", height: "18"}
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      {...sizeMap[size]} 
      viewBox="0 0 14.172 14.172" 
      className={className}
    >
      <g transform="translate(7.086 0) rotate(45)">
        <path id="Union_3" d="M8.312,9.727l-3.3-3.3-3.3,3.3A1,1,0,0,1,.293,8.312l3.3-3.3-3.3-3.3A1,1,0,0,1,1.708.293l3.3,3.3,3.3-3.3A1,1,0,0,1,9.727,1.708l-3.3,3.3,3.3,3.3A1,1,0,1,1,8.312,9.727Z" fill={color} />
      </g>
    </svg>
  )
}

Plus.displayName = 'PlusIcon';