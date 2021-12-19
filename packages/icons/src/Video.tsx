import React from 'react';
import { IconProps } from './utils';


export default function Video({
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
      viewBox="0 0 19 17" 
      className={className}
    >
      <rect id="Rectangle_1529" data-name="Rectangle 1529" width="14" height="17" rx="1" fill={color} />
      <rect id="Rectangle_1530" data-name="Rectangle 1530" width="3" height="13" rx="1.5" transform="translate(16 2)" fill={color} />
    </svg>
  )
}

Video.displayName = 'VideoIcon';