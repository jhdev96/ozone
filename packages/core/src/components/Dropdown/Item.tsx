import React, { 
  useContext, 
  useEffect, 
  useState,
} from 'react';
import classNames from '../../utils/classNames';
import { DropdownContext } from './context';
import styles from './index.module.scss';


interface ItemProps {
  /**
   * Sets the HTML `id` attribute for
   * the div element below.
   */
  id?: string;
  /**
   * A string value which will be passed
   * to a callback when the item is clicked. 
   * 
   * If a name is not provided, then the
   * item's textContent will be used instead.
   */
  name?: string;
  /**
   * The item's content.
   */
  children?: React.ReactNode;
}

export default function Item({
  id,
  name,
  children
}: ItemProps): JSX.Element 
{
  const {selected, handleSelection} = useContext(DropdownContext);
  const [isSelected, setIsSelected] = useState(false);
  const spanRef = React.createRef<HTMLSpanElement>();

  const selectThisItem = (e: React.MouseEvent<HTMLDivElement>) => {
    const text = e.currentTarget.textContent;
    let selection: string;

    if (name) {
      selection = name;
    } else if (text) { 
        selection = text; 
    } else { 
        selection = ''; 
    }

    handleSelection && handleSelection(selection);
  }

  useEffect(() => {
    if (spanRef.current) {
      const text = spanRef.current.textContent;

      if (name === selected || text === selected) {
        setIsSelected(true);
      } else {
          setIsSelected(false);
      }
    }
  }, [selected, spanRef.current]);

  return (
    <div 
      id={id}
      onClick={selectThisItem} 
      className={styles.menu__item} 
    >
      <span
        className={classNames(
          isSelected && styles.selected
        )}
        ref={spanRef}
      >
        {children}
      </span>
    </div>
  )
}

Item.displayName = 'DropdownItem';