import React from 'react';


interface ContextType {
  /** The name of the active tab. */
  activeTab: string;
  /** A function that sets the active tab. */
  setActiveTab: (name: string) => void;
};

export const TabContext = React.createContext<ContextType>({
  activeTab: '',
  setActiveTab: (name: string) => {}
});