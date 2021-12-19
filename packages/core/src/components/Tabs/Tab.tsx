import React, { useContext } from 'react';
import classNames from '../../utils/classNames';
import { ThemeType } from '../../utils/theme';
import { TabContext } from './context';
import styles from './index.module.scss';


interface TabProps {
  /**
   * A required title for the tab. 
   * 
   * When a tab is clicked, its title
   * will be reported back to the 
   * `Tabs` component.
   */
  title: string;
  /**
   * Gives the tab a light or dark theme.
   */
  theme?: ThemeType;
  /**
   * Applies custom css styling to 
   * the component.
   */
  className?: string;
}

const Tab = React.forwardRef<HTMLDivElement, TabProps>(
  function Tab({
    title,
    theme = 'light',
    className}: TabProps,
    ref: React.ForwardedRef<HTMLDivElement>): JSX.Element 
  {
    const {activeTab, setActiveTab} = useContext(TabContext);

    const handleClick = () => {
      if (activeTab !== title) {
        setActiveTab(title);
      }
    }

    return (
      <div 
        className={classNames(
          className,
          styles.tab,
          styles[theme],
          activeTab === title && styles.active
        )}
        onClick={handleClick}
        ref={ref}
      >
        {title}
      </div>
    )
  }
)

Tab.displayName = 'Tab';

export default Tab;