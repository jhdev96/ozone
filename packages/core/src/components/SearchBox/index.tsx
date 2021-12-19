import React, { useState, useRef } from 'react';
import classNames from '../../utils/classNames';
import { ThemeType } from '../../utils/theme';
import { toggleFocus } from './utils';
import { Search as SearchIcon } from '@jhdev96/ozone-icons';
import Colors from '@jhdev96/ozone-colors';
import ClickManager from '../ClickManager';
import SearchResult from './SearchResult';
import styles from './index.module.scss';


interface SearchBoxProps {
  /** 
   * Adds a light border around the searchbox.
   */
  outline?: boolean;
  /** 
   * The text that is shown when the search
   * input is empty.
   */
  placeholder?: string;
  /** 
   * Gives the searchbox a light or dark appearance.
  */
  theme?: ThemeType;
  /** 
   * If true, the searchbox will occupty the full
   * width of its container.
   */
  fullWidth?: boolean;
  /**
   * Sets the `className` property of the searchbox.
   */ 
  className?: string;
  /** 
   * Function that is called when the search input's
   * value changes. 
   */
  onChange?: (query: string) => void;
  /**
   * Called when the searchbox gains focus.
   */
  onFocus?: (e: React.FocusEvent) => void;
  /** 
   * Called when the searchbox loses focus.
   */
  onBlur?: (e: React.FocusEvent) => void;
  /**
   * Called when a key is pressed down with the input focused.
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * Called when a key is released with the input focused.
   */
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /** 
   * Called while a key is being pressed down with
   * the input focused.
   */
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /** 
   * An element used for filtering search queries.
   */
  searchFilter?: React.ReactNode;
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
  /** 
   * The markup provided to this prop
   * should be the search results that
   * are returned from a user's search
   * query.
   */
  children?: React.ReactNode;
} 

const SearchBox = React.forwardRef<HTMLInputElement, SearchBoxProps>(
  function SearchBox({
    outline       = false,
    placeholder   = "Search",
    theme         = "light",
    fullWidth     = false,
    className,
    onChange      = () => {},
    onFocus       = () => {},
    onBlur        = () => {},
    onKeyDown     = () => {},
    onKeyPress    = () => {},
    onKeyUp       = () => {},
    searchFilter,
    dataTestId,
    children}: SearchBoxProps,
    ref: React.ForwardedRef<HTMLInputElement>): JSX.Element 
  {
    const [results, setResults] = useState<React.ReactNode>(children);
    const wrapperRef = useRef<HTMLDivElement>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setResults(children);
      onChange(e.target.value);
    }

    const handleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
      toggleFocus(e);
      onFocus(e);
    }

    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
      toggleFocus(e);
      onBlur(e);
    }

    return (
      <ClickManager 
        ref={wrapperRef} 
        className={styles.searchWrapper} 
        onClick={() => results && setResults(null)}
      >
        <div 
          onFocus={(e) => handleFocus(e)}
          onBlur={(e) => handleBlur(e)}
          className={classNames(
            styles.searchContainer,
            styles[theme],
            outline   && styles.outline,
            fullWidth && styles.fill,
            className
          )}
          data-testid={dataTestId}
        >
          <div className={styles.mainSearch}>
            <span className={styles.searchIcon}>
              <SearchIcon 
                color={
                  theme === 'dark' 
                  ? Colors.grayScale.GRAY4  
                  : Colors.grayScale.BLACK2
                } 
              />
            </span>
            <input 
              type="text" 
              className={styles.searchInput} 
              placeholder={placeholder} 
              onChange={handleChange}
              onKeyDown={onKeyDown}
              onKeyPress={onKeyPress}
              onKeyUp={onKeyUp}
              autoComplete="off"
              ref={ref}
            />
            <span className={styles.searchFilter}>
              {searchFilter}
            </span>
          </div>
          <div className={styles.searchResults}>
            {results && children}
          </div>
        </div>
      </ClickManager>
    );
  }
)

export { SearchResult };
export default SearchBox;

SearchBox.displayName = 'SearchBox';