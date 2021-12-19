import React from 'react';


interface ContextType {
  /** The name of the selected item. */
  selected?: string;
  /** A function that handles selection. */
  handleSelection?: (name: string) => void;
};

export const DropdownContext = React.createContext<ContextType>({
  selected: '',
  handleSelection: () => {}
});