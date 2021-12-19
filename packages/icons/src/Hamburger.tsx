import React from 'react';
import { IconProps } from './utils';


export default function Hamburger({
  color,
  size  = "sm",
  className
}: IconProps): JSX.Element 
{
  const sizeMap = {
    sm: {width: "16", height: "10"},
    md: {width: "20", height: "14"},
    lg: {width: "24", height: "18"}
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      {...sizeMap[size]} 
      viewBox="0 0 16 9.5" 
      style={{alignSelf: 'center'}} 
      className={className}
    >
      <g id="Group_4" data-name="Group 4" transform="translate(-452 -68)">
        <rect id="Rectangle_703" width="16" height="1.5" rx="0.75" transform="translate(452 68)" fill={color} />
        <rect id="Rectangle_706" width="16" height="1.5" rx="0.75" transform="translate(452 72)" fill={color} />
        <rect id="Rectangle_707" width="16" height="1.5" rx="0.75" transform="translate(452 76)" fill={color} />
      </g>
    </svg>
  )
}

Hamburger.displayName = 'HamburgerIcon';