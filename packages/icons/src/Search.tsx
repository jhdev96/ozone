import React from 'react';
import { IconProps } from './utils';


export default function Search({
  color,
  size  = 'sm',
  className
}: IconProps): JSX.Element 
{
  const sizeMap = {
    sm: {width:"12.6", height:"14.6"},
    md: {width:"16.6", height:"18.6"},
    lg: {width:"20.6", height:"22.6"}
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      {...sizeMap[size]} 
      viewBox="0 0 14.6 16.6" 
      className={className}
    >
      <g id="Ellipse_1" fill="none" stroke={color} strokeWidth="2.5">
        <circle cx="6" cy="6" r="6" stroke="none" />
        <circle cx="6" cy="6" r="4.75" fill="none" />
      </g>
      <line id="Line_5" x2="3" y2="4" transform="translate(9.5 10.5)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="3" />
    </svg>
  );
}

Search.displayName = 'SearchIcon';