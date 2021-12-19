import React, { useEffect } from 'react';


interface ClickManagerProps {
  /** 
   * Sets the `className` attribute
   * for the rendered div element.
   */
  className?: string;
  /** 
   * A function that gets called when
   * the rendered element is clicked.
  */
  onClick?: () => void;
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
  /** 
   * The component around which this
   * ClickManager will wrap.
   */ 
  children: React.ReactNode;
}

const ClickManager = React.forwardRef<any, ClickManagerProps>(
  function ClickManager({
    className, 
    onClick,
    dataTestId,
    children}: ClickManagerProps, 
    ref: React.ForwardedRef<any>): JSX.Element 
  {
    const localRef = ref as React.MutableRefObject<any>;

    function outsideClick(this: Document, e: MouseEvent) {
      const target = e.target as HTMLElement;
      
      if (localRef && localRef.current && !localRef.current.contains(target)) {
        onClick && onClick();
      }
    }

    useEffect(() => {
      document.addEventListener('click', outsideClick);
      document.addEventListener('contextmenu', outsideClick);
      return () => {
        document.removeEventListener('click', outsideClick);
        document.removeEventListener('contextmenu', outsideClick);
      }
    });

    return (
      <div 
        ref={ref} 
        className={className} 
        data-testid={dataTestId}
      >
        {children}
      </div>
    )
  }
);

ClickManager.displayName = 'ClickManager';

export default ClickManager;