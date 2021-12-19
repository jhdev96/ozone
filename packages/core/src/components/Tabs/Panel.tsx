import React from "react";
import styles from './index.module.scss';


interface TabPanel {
  /**
   * The panel content.
   */
  children?: React.ReactNode;
}

export default function TabPanel({children}: TabPanel): JSX.Element 
{
  return (
    <div className={styles.panel}>
      {children}
    </div>
  )
}

TabPanel.displayName = 'TabPanel';