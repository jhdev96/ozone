import React from 'react';
import { IconProps } from './utils';


export default function MapMarker({
  color,
  size  = "sm",
  className,
}: IconProps): JSX.Element 
{
  const sizeMap = {
    sm: {width: "15", height: "15"},
    md: {width: "19", height: "19"},
    lg: {width: "23", height: "23"}
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      {...sizeMap[size]} 
      viewBox="0 0 20.664 28.591"
      className={className}
    >
      <path id="Subtraction_16" d="M10.3,201.591h0c-.026-.031-2.6-3.154-5.119-7a49.6,49.6,0,0,1-3.535-6.236A15.124,15.124,0,0,1,0,182.531a8.592,8.592,0,0,1,3.675-7.274A12.119,12.119,0,0,1,10.3,173h.1a11.52,11.52,0,0,1,6.543,2.258,8.964,8.964,0,0,1,3.722,7.273,14.231,14.231,0,0,1-1.579,5.824,47.268,47.268,0,0,1-3.569,6.236,82.867,82.867,0,0,1-5.22,7Zm.439-23.013a3.952,3.952,0,1,0,3.952,3.953A3.957,3.957,0,0,0,10.735,178.578Z" transform="translate(0 -173)" fill={color} />
    </svg>
  )
}

MapMarker.displayName = 'MapMarkerIcon';