import React from 'react';
import { IconProps, rotationMap } from './utils';


export default function Arrow({
  color, 
  size      = "sm",
  direction = "down",
  className
}: IconProps): JSX.Element 
{
  const sizeMap = {
    sm: {width: "10.4", height: "9.1"},
    md: {width: "14.4", height: "13.1"},
    lg: {width: "18.4", height: "17.1"}
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      {...sizeMap[size]} 
      viewBox="0 0 14.4 9.1" 
      style={{
        transform: rotationMap[direction], 
        alignSelf: "center"
      }}
      className={className}
    >
      <path 
        id="Path_36" 
        d="M7.2,0,0,7.011,2.145,9.1,7.2,4.177,12.255,9.1,14.4,7.011Z" 
        transform="translate(0 0)" 
        fill={color} 
      />
    </svg>
  );
}

Arrow.displayName = 'ArrowIcon';