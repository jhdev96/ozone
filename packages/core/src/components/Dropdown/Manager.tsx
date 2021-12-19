import React from 'react';
import ClickManager from '../ClickManager';
import OverflowManager from '../OverflowManager';


interface ManagerProps {
  /**
   * A ref object to pass to the ClickManager
   * component.
   */
  clickRef?: React.MutableRefObject<HTMLDivElement|undefined>;
  /**
   * A ref object to pass to the OverflowManager
   * component.
   */
  overflowRef?: React.MutableRefObject<HTMLDivElement|undefined>;
  /**
   * An optional css class that provides additional
   * styling.
   */
  className?: string;
  /**
   * A function that gets called when a user clicks
   * outside of the ClickManager component.
   */
  onClick?: () => void;
  /**
   * This is true when the dropdown is visible.
   */
  showDropdown: boolean;
  /**
   * A function which sets the state for the Dropdown
   * component.
   */
  setStateFn: (value: React.SetStateAction<boolean>) => void;
  /**
   * A React node around which this component wraps.
   */
  children?: React.ReactNode;
}

export default function Manager({
  clickRef,
  overflowRef,
  className,
  onClick,
  showDropdown,
  setStateFn,
  children
}: ManagerProps): JSX.Element 
{
  const localRef = overflowRef as React.Ref<HTMLDivElement>;

  return (
    <ClickManager 
      ref={clickRef} 
      className={className} 
      onClick={onClick}
    >
      <OverflowManager 
        ref={localRef} 
        isVisible={showDropdown}
        onOverflow={() => showDropdown && setStateFn(true)}
        onVisible={() => showDropdown && setStateFn(false)}
        updateParameters={[showDropdown]}
      >
        {children}
      </OverflowManager>
    </ClickManager>
  )
}