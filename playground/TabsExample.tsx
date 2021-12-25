import React, { useState } from 'react';
import {Tabs, Tab, TabPanel } from '@jhdev96/ozone';


export default function TabsExample(): JSX.Element 
{
  const [selected, setSelectd] = useState("Tab 1");

  const PanelContent = (): string => {
    switch (selected) {
      case 'Tab 1':
        return 'Panel 1';
      case 'Tab 2':
        return 'Panel 2';
      case 'Tab 3':
        return 'Panel 3'
      default:
        return null;
    }
  }

  const panelStyle: React.CSSProperties = { 
    padding: '5rem',
    color: 'var(--black-core)',
    backgroundColor: '#f7f7f7', 
    textAlign: 'center',
    fontSize: '3em'
  };

  return (
    <>
      <Tabs 
        selectedTab={selected} 
        onChange={(name?: string) => setSelectd(name)}
      >
        <Tab title="Tab 1" />
        <Tab title="Tab 2" />
        <Tab title="Tab 3" />
      </Tabs>
      <TabPanel>
        <div style={panelStyle}>
          {PanelContent()}
        </div>
      </TabPanel>
    </>
  )
}