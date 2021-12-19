import React, { useEffect, ReactFragment } from 'react';


interface OverflowManagerProps {
  /** 
   * A function that gets called when
   * the ref's current element goes
   * beyond the visual viewport.
  */
  onOverflow?: () => void;
  /**
   * Called when the ref.current
   * element is fully in the
   * window's viewport.
   */
  onVisible?: () => void;
  /**
   * An array of dependecies
   * that determines when `useEffect`
   * gets called.
   */
  updateParameters?: unknown[];
  /**
   * If true, this component
   * will skip over calls to
   * `onVisible` and `onOverflow.`
   */
  isVisible: boolean;
  /** 
   * The component around which this
   * ClickManager will wrap.
   */ 
  children: React.ReactNode;
}

const OverflowManager = React.forwardRef<HTMLDivElement, OverflowManagerProps>(
  function OverflowManager({
    onOverflow = () => {},
    onVisible  = () => {},
    updateParameters,
    isVisible,
    children}: OverflowManagerProps, 
    ref: React.ForwardedRef<HTMLDivElement>): JSX.Element 
  {
    const localRef = ref as React.MutableRefObject<HTMLDivElement>;
    const depArray = updateParameters 
      ? [...updateParameters]
      : [];
    
    useEffect(() => {
      const refBottomPos = localRef.current?.getBoundingClientRect().bottom;

      if (isVisible) {
        if (refBottomPos && refBottomPos >= window.visualViewport?.height) {
          /** visualViewport may not be defined in testing environments. */
          onOverflow();
        } else {
            onVisible();
        }
      }
    }, depArray);

    return (
      <div>{children}</div>
    )
  }
);

OverflowManager.displayName = 'OverflowManager';

export default OverflowManager;