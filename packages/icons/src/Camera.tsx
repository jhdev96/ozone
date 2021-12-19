import React from 'react';
import { IconProps } from './utils';


export default function Camera({
  color,
  size  = "sm",
  className
}: IconProps): JSX.Element 
{
  const sizeMap = {
    sm: {width: "20.19", height: "14.29"},
    md: {width: "24.19", height: "18.29"},
    lg: {width: "28.19", height: "22.29"}
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      {...sizeMap[size]} 
      viewBox="0 0 24.195 18.292" 
      className={className}
    >
      <g id="Group_141" data-name="Group 141" transform="translate(-35.25 -116)">
        <path id="Subtraction_7" data-name="Subtraction 7" d="M2411.348-3544.854h-22a1,1,0,0,1-1-1v-14a1,1,0,0,1,1-1h22a1,1,0,0,1,1,1v14A1,1,0,0,1,2411.348-3544.854Zm-11-12.5a4.505,4.505,0,0,0-4.5,4.5,4.505,4.505,0,0,0,4.5,4.5,4.505,4.505,0,0,0,4.5-4.5A4.505,4.505,0,0,0,2400.347-3557.353Z" transform="translate(-2352.903 3679.146)" fill={color} />
        <circle id="Ellipse_48" data-name="Ellipse 48" cx="3" cy="3" r="3" transform="translate(44.444 123.293)" fill={color} />
        <rect id="Rectangle_1532" data-name="Rectangle 1532" width="4.878" height="1.463" rx="0.732" transform="translate(35.25 116)" fill={color} />
      </g>
    </svg>
  )
}

Camera.displayName = 'CameraIcon';