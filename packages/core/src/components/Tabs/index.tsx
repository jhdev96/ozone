import React, { Component } from 'react';
import { TabContext } from './context';
import Tab from './Tab';
import TabPanel from './Panel';
import styles from './index.module.scss';


interface TabsProps {
  /**
   * The name of the selected tab.
   */
  selectedTab: string;
  /** 
   * The function that is called when
   * the the active tab is changed.
   */ 
  onChange?: (tabName?: string) => void;
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
  /**
   * The individual tabs renderd inside 
   * the component.
   */
  children?: React.ReactNode;
}

type TabsState = {activeTab: string};

export default class Tabs extends Component<TabsProps, TabsState> {
  public static displayName = 'Tabs';

  public readonly state = {
    activeTab: this.props.selectedTab
  }

  componentDidUpdate() {
    if (this.props.onChange) {
      this.props.onChange(this.state.activeTab);
    }
  }

  setActiveTab = (tab: string) => {
    this.setState({activeTab: tab});
  }

  public render(): JSX.Element {
    const {activeTab} = this.state;
    const {children, dataTestId} = this.props;

    return (
      <TabContext.Provider 
        value={{
          activeTab, 
          setActiveTab: this.setActiveTab
        }}
      >
        <div 
          className={styles.tabs} 
          data-testid={dataTestId}
        >
          {children}
        </div>
      </TabContext.Provider>
    )
  }
}

export { Tab, TabPanel };