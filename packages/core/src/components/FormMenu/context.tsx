import React from 'react';


interface ContextType {
  activeOption: {
    name: string,
    yPos: number,
    deltaY: number,
    menuSlider: React.MutableRefObject<HTMLDivElement | undefined>
  };
  setActiveOption: (params: ContextType['activeOption']) => void
};

export const MenuContext = React.createContext<[ContextType['activeOption'], ContextType['setActiveOption']]>([
  {
    name: '', 
    yPos: 7, 
    deltaY: 0, 
    menuSlider: React.createRef<HTMLDivElement | undefined>() as React.MutableRefObject<HTMLDivElement | undefined>
  },
  (_: ContextType['activeOption']) => {}
]);
export const MenuOptionContext = React.createContext<ContextType[]>([]);