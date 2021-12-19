import React from 'react';
import { IconProps } from './utils';


export default function Bell({
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
      viewBox="0 0 17.996 21" 
      className={className}
    >
      <g id="Group_6" transform="translate(-534.019 -59)">
        <g id="Group_5">
          <path id="Rectangle_709" d="M7,0H7a7,7,0,0,1,7,7v6a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V7A7,7,0,0,1,7,0Z" transform="translate(536 61)" fill={color} />
          <path id="Rectangle_710" d="M2,0H2A2,2,0,0,1,4,2V3A0,0,0,0,1,4,3H0A0,0,0,0,1,0,3V2A2,2,0,0,1,2,0Z" transform="translate(541 59)" fill={color} />
        </g>
        <path id="Path_211" d="M0,0H14V.98a18.766,18.766,0,0,1,1.509,1.829A2.485,2.485,0,0,1,16.015,4H-1.978a1.929,1.929,0,0,1,.429-1.191A15.982,15.982,0,0,1,0,.98Z" transform="translate(536 73)" fill={color} />
        <path id="Rectangle_711" d="M0,0H4A0,0,0,0,1,4,0V0A2,2,0,0,1,2,2H2A2,2,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(541 78)" fill={color} />
      </g>
    </svg>
  )
}

Bell.displayName = 'BellIcon';