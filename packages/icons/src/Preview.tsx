import React from 'react';
import { IconProps } from './utils';


export default function Preview({
  color,
  size = "sm",
  className
}: IconProps): JSX.Element 
{
  const sizeMap = {
    sm: {height: "8", width: "20"},
    md: {height: "12", width: "24"},
    lg: {height: "16", width: "28"}
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      {...sizeMap[size]} 
      viewBox="0 0 34 22.667" 
      className={className}
    >
      <path
        className="preview-icon" 
        id="fa-eye-solid" 
        d="M33.8,74.472A18.933,18.933,0,0,0,17,64,18.935,18.935,0,0,0,.206,74.472a1.91,1.91,0,0,0,0,1.723A18.933,18.933,0,0,0,17,86.667,18.935,18.935,0,0,0,33.8,76.195a1.91,1.91,0,0,0,0-1.723ZM17,83.833a8.5,8.5,0,1,1,8.5-8.5A8.5,8.5,0,0,1,17,83.833Zm0-14.167a5.626,5.626,0,0,0-1.494.224,2.824,2.824,0,0,1-3.949,3.949A5.654,5.654,0,1,0,17,69.667Z" 
        transform="translate(-0.001 -64)" 
        fill={color} 
      />
    </svg>
  );
}

Preview.displayName = 'PreviewIcon';