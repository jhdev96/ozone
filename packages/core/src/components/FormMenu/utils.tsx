import React from 'react';
import styles from './index.module.scss';


export const createTransition = (
  slider: React.MutableRefObject<HTMLDivElement | undefined>, 
  delta: number
) => {
  /** Add a transition to the menu slider when moving to an option
   * that is more than 50 pixels away from the current option.
   * 
   * @param slider // a reference to the menu slider element
   * @param delta // the difference between the two options
   */
  if (Math.abs(delta) > 50) {
    slider.current!.classList.add(styles.transition);

    setTimeout(() => {
      slider.current!.classList.remove(styles.transition)
    }, 400);
  }
}