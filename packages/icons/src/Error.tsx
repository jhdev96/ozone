import React from 'react';
import { IconProps } from './utils';


export default function Danger({
  color,
  size  = "sm",
  className
}: IconProps): JSX.Element 
{
  const sizeMap = {
    sm: {width: "11.3", height: "15.817"},
    md: {width: "15.3", height: "19.817"},
    lg: {width: "19.3", height: "23.817"}
  };

  return (
    <>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        {...sizeMap[size]} 
        viewBox="0 0 11.3 15.817"
        className={className}
      >
        <g id="error-fire" transform="translate(0 -0.1)">
          <path id="Subtraction_16" d="M-542-3218.083a6.007,6.007,0,0,1-6-6c0-3.289,5.713-9.753,5.771-9.818a2.815,2.815,0,0,0,.23.486,19.62,19.62,0,0,0,1.149,1.788l.086.126.254.374c-.023.029-2.261,2.794-2.215,4.1a2.426,2.426,0,0,0,2.432,2.349h.131a2.227,2.227,0,0,0,1.6-.681,2.221,2.221,0,0,0,.616-1.654,8.461,8.461,0,0,1,1.249,3.6,5.4,5.4,0,0,1-1.407,3.91A5.329,5.329,0,0,1-542-3218.083Z" transform="translate(548 3234)" fill={color} />
        </g>
      </svg>
    </>
  )
}


Danger.displayName = 'DangerIcon';