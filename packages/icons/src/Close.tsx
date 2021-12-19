import React from 'react';
import { IconProps } from './utils';


export default function Close({
  color,
  size  = "sm",
  className
}: IconProps): JSX.Element 
{
  const sizeMap = {
    sm: {width: "7", height: "10"},
    md: {width: "11", height: "14"},
    lg: {width: "15", height: "19"}
  };

  return (
    <>
      <svg 
        id="Cancel" 
        xmlns="http://www.w3.org/2000/svg" 
        {...sizeMap[size]} 
        viewBox="0 0 15.021 15.021"
        className={className}
      >
        <path id="Union_3" d="M12.374,14.5l-4.95-4.95L2.475,14.5A1.5,1.5,0,0,1,.354,12.374L5.3,7.425.354,2.475A1.5,1.5,0,0,1,2.475.354L7.425,5.3l4.95-4.95A1.5,1.5,0,0,1,14.5,2.475l-4.95,4.95,4.95,4.95A1.5,1.5,0,1,1,12.374,14.5Z" transform="translate(0.086 0.086)" fill={color} />
      </svg>
    </>
  )
}

Close.displayName = 'CloseIcon';