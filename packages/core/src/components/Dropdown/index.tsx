import React, { useState, useRef, LegacyRef } from 'react';
import classNames from '../../utils/classNames';
import { ThemeType } from '../../utils/theme';
import { DropdownContext } from './context';
import DropdownButton from './DropdownButton';
import Manager from './Manager';
import Item from './Item';
import styles from './index.module.scss';


interface DropdownProps {
  /** 
   * Sets the theme for the dropdown. 
   */
  theme?: ThemeType;
  /** 
   * Main classnames for dropdowns. 
   */
  variation?: "basic" | "filter";
  /** 
   * When true, this will display 
   * the selected option as the new title. 
   */
  saveSelection?: Boolean;
  /** 
   * Give the dropdown a default option when rendered. 
   */
  defaultValue?: string;
  /** 
   * The function to be invoked when a selection is made. 
   * A `selectedItem` parameter should be given to the
   * callback so that when an option is selected, its
   * value is received by the dropdown's parent element.
   */
  onSelection?: (selectedItem: string) => void;
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
  /**
   * The dropdown menu items.
   */
  children?: React.ReactNode;
}

export default function Dropdown({
  theme           = "light", 
  variation       = "basic",
  saveSelection,
  defaultValue    = "Dropdown",
  onSelection     = () => {},
  dataTestId,
  children
}: DropdownProps): JSX.Element 
{
  const [selected, setSelected] = useState<string>(defaultValue);
  const [visible, setVisible] = useState(false);
  const [aboveTarget, setAboveTarget] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>();
  const menuRef = useRef<HTMLDivElement>();

  const toggleDropdown = () => {
    setVisible(!visible);
    setAboveTarget(false);
  }

  const handleSelection = (name: string) => {
    /** 
     * display the selected option from the dropdown menu 
     * if the `saveSelection` prop is set to true.
     */
    if (saveSelection) setSelected(name); 
    
    name && onSelection(name);
    toggleDropdown();
  }
       
  return (
    <Manager
      clickRef={wrapperRef}
      overflowRef={menuRef}
      className={classNames(
        styles[variation],
        aboveTarget && styles.aboveTarget
      )}
      onClick={() => {visible && toggleDropdown()}}
      setStateFn={setAboveTarget}
      showDropdown={visible}
    >
      <DropdownContext.Provider value={{selected, handleSelection}}>
        <DropdownButton
          variation={variation}
          theme={theme}
          onClick={toggleDropdown}
          showDropdown={visible}
          arrowDirection={aboveTarget ? "up" : "down"}
        />
        <div 
          className={classNames(
            styles['dropdown__menu'],
            styles[`dropdown__menu--${variation}`],
            styles[`dropdown__menu--${variation}--${theme}`],
            visible && styles.visible
          )}
          ref={menuRef as LegacyRef<HTMLDivElement>}
          data-testid={dataTestId}
        >
          {children}
        </div>
      </DropdownContext.Provider>
    </Manager>
  )
}

Dropdown.displayName = 'Dropdown';
Dropdown.Item = Item;