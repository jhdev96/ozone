import React from 'react';
import { IconProps } from './utils';


export default function Help({
  color,
  size  = "sm",
  className
}: IconProps): JSX.Element 
{
  const sizeMap = {
    sm: {width:"14", height:"14"},
    md: {width:"18", height:"18"},
    lg: {width:"22", height:"22"}
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      {...sizeMap[size]} 
      viewBox="0 0 20 20" 
      className={className}
    >
      <path d="M28,18A10,10,0,1,1,18,8,10,10,0,0,1,28,18Zm-9.732-6.694a5.223,5.223,0,0,0-4.7,2.571.485.485,0,0,0,.109.656l1.4,1.061a.484.484,0,0,0,.672-.086c.72-.914,1.214-1.443,2.311-1.443.824,0,1.843.53,1.843,1.329,0,.6-.5.914-1.312,1.37-.949.532-2.2,1.194-2.2,2.849v.161a.484.484,0,0,0,.484.484h2.258a.484.484,0,0,0,.484-.484v-.054c0-1.148,3.354-1.2,3.354-4.3C22.967,13.081,20.541,11.306,18.268,11.306Zm-.268,10a1.855,1.855,0,1,0,1.855,1.855A1.857,1.857,0,0,0,18,21.307Z" transform="translate(-8 -8)" fill={color} />
    </svg>
  )
}

Help.displayName = 'HelpIcon';