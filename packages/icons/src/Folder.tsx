import React from 'react';
import { IconProps } from './utils';


export default function Folder({
  color,
  size  = "sm",
  className
}: IconProps): JSX.Element 
{
  const sizeMap = {
    sm: {width: "16.133", height: "14"},
    md: {width: "20.133", height: "18"},
    lg: {width: "24.133", height: "22"},
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      {...sizeMap[size]} 
      viewBox="0 0 16 14.05" 
      className={className}
    >
      <path id="Path_212" data-name="Path 212" d="M1.563,0S4.449-.067,5.724,0,7.575,2.044,8,2.117s6.508,0,6.508,0A1.589,1.589,0,0,1,16,3.571V12.46a1.692,1.692,0,0,1-1.492,1.56H1.563A1.765,1.765,0,0,1,0,12.46V1.4A1.612,1.612,0,0,1,1.563,0Z" transform="translate(0.003 0.03)" fill={color} />
    </svg>
  )
}