import React from 'react';


const ARROW_SIZE = 10;
export type Position = "top" | "bottom" | "left" | "right";

export const positionPopper = (
  targetRef: React.MutableRefObject<HTMLElement | undefined>, 
  popperRef: React.MutableRefObject<HTMLElement | undefined>, 
  position?: Position
) =>  {
  /**
   * This function helps to position the popover
   * component relative to its target element.
   * @param targetRef // a ref pointing to the target element.
   * @param popperRef // a ref pointing to the popover.
   * @param position // where the popover should be place.
   */
  const target = targetRef.current;
  const popper = popperRef.current;

  switch (position) {
    case 'top':
      if (popper && target) {
        popper!.style.bottom = `${target!.offsetHeight + ARROW_SIZE}px`;
      }
      break;
    case 'left':
    case 'right':
      break;
    default:
      // bottom position
      if (popper && target) {
        popper!.style.top = `${target!.offsetHeight + ARROW_SIZE}px`;
      }
  }
}