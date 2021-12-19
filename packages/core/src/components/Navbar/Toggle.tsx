import React from 'react';
import styles from './index.module.scss';


interface ToggleProps {
  /** 
   * A label used to identify the toggle
   * button for accessibility purposes.
   */
  label?: string;
  /** 
   * The HTML id of the target element.
   * 
   * The target element should be a
   * `Collapse` component. 
   */ 
  targetId: string;
  /** 
   * The content that will be rendered
   * inside the toggle button.
   */ 
  children?: React.ReactNode;
}

export default function Toggle({
  label,
  targetId,
  children
}: ToggleProps): JSX.Element 
{
  const toggleNav = () => {
    const nav = document.getElementById(targetId);
    
    if (!nav?.classList.contains(styles.show)) {
      nav?.classList.add(styles.show);
    } else {
        nav?.classList.remove(styles.show);
    }
  }

  return (
    <button 
      type="button"
      className={styles.navToggle} 
      aria-label={label}
      onClick={toggleNav}
    >
      {children}
    </button>
  )
}

Toggle.displayName = 'NavbarToggle';