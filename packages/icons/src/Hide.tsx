import React from 'react';
import { IconProps } from './utils';


export default function Hide({
  color,
  size = "sm",
  className
}: IconProps): JSX.Element 
{
  const sizeMap = {
    sm: {height: "22", width: "34"},
    md: {height: "26", width: "38"},
    lg: {height: "30", width: "42"}
  }
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      {...sizeMap[size]} 
      viewBox="0 0 19 19" 
      className={className}
    >
      <path d="M12.779,67.96A7.159,7.159,0,0,0,6.429,64,7.16,7.16,0,0,0,.078,67.96a.722.722,0,0,0,0,.652,7.159,7.159,0,0,0,6.351,3.96,7.16,7.16,0,0,0,6.351-3.96.722.722,0,0,0,0-.652ZM6.429,71.5a3.214,3.214,0,1,1,3.214-3.214A3.214,3.214,0,0,1,6.429,71.5Zm0-5.357a2.127,2.127,0,0,0-.565.085,1.068,1.068,0,0,1-1.493,1.493,2.138,2.138,0,1,0,2.058-1.578Z" transform="translate(7.871 -61.686)" fill={color} />
      <line id="Line_8" x1="12" y1="8" transform="translate(8.6 2.9)" fill="none" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

Hide.displayName = 'HideIcon';