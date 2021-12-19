import React, { useContext } from 'react';
import classNames from '../../utils/classNames';
import { ThemeType } from '../../utils/theme';
import Colors from '@jhdev96/ozone-colors';
import { Arrow } from '@jhdev96/ozone-icons';
import { DropdownContext } from './context';
import styles from './index.module.scss';


interface DropdownButtonProps {
  /**
   * The type of dropdown being rendered.
   */
  variation?: "basic" | "filter";
  /**
   * Gives the button a light or dark theme.
   */
  theme?: ThemeType;
  /**
   * A function that is called when the button
   * is clicked.
   */
  onClick?: () => void;
  /**
   * Sets the direction of the arrow icon on
   * the button. This will be passed as a prop
   * to arrow icon.
   */
  arrowDirection?: "up" | "down";
  /**
   * This will be true when the dropdown is
   * visible.
   */
  showDropdown: boolean;
}

export default function DropdownButton({
  variation,
  theme,
  onClick,
  arrowDirection,
  showDropdown
}: DropdownButtonProps): JSX.Element 
{
  const {selected} = useContext(DropdownContext);

  return (
    <div
      onClick={onClick} 
      className={classNames(
        styles[`${variation}__button`], 
        styles[`${variation}__button--${theme}`],
        showDropdown && styles[`${variation}__button--visible`]
      )}
    >
      <span className={styles[`${variation}__title`]}>
        {selected}
      </span>
      <Arrow 
        direction={arrowDirection} 
        color={Colors.grayScale.BLACK2} 
      />
    </div>
  )
}