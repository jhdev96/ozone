import React from 'react';
import classNames from '../../utils/classNames';
import styles from './index.module.scss';


export const menuOptions = (
  selectedOption: string, 
  options: (string | React.ReactNode)[], 
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
): React.ReactNode => {
  /**
    * Return an array of div elements
    * based on the options given by 
    * the client. Each div should 
    * have an onClick prop specifying
    * the function to be invoked when
    * the div or its child element is
    * clicked.
    */
  const optionDivs = options.map((
    option: string | React.ReactNode, 
    idx: React.Key
  ) => (
    <div 
      onClick={onClick} 
      className={styles["menu__option"]} 
      key={idx}
    >
      <span
        className={classNames(
          option === selectedOption && styles.selected
        )}
      >
        {option}
      </span>
    </div>
  ));

  return optionDivs;
};