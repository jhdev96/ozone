import React from 'react';
import { IconProps } from './utils';


export default function Success({
  color,
  size  = "sm",
  className
}: IconProps): JSX.Element 
{
  const sizeMap = {
    sm: {width: "13.242", height: "13.397"},
    md: {width: "17.242", height: "17.397"},
    lg: {width: "21.242", height: "21.397"},
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      {...sizeMap[size]}
      viewBox="0 0 14.242 14.397"
      className={className}
    >
      <g id="Component_74_1" transform="translate(1.299 0.444)">
        <g id="Group_146" transform="translate(-498.31 -3301.875) rotate(-4)">
          <line 
            id="Line_2" 
            x2="3.427" 
            y2="3.224" 
            transform="translate(267.073 3336.275)" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeWidth="3"
          />
          <path 
            id="Path_38" 
            d="M7.817-1.6,1.7,7.672" 
            transform="translate(268.811 3331.831)" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeWidth="3"
          />
        </g>
      </g>
    </svg>
  )
}

Success.displayName = 'SuccessIcon';