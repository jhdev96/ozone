import React from 'react';
import classNames from '../../utils/classNames';
import styles from './index.module.scss';


interface SearchResultProps {
  /**
   * Assigns a name to the search result.
   * 
   * This is so the consumer of this component
   * can retrieve the name when the result is 
   * clicked.
   */
  name?: string;
  /**
   * Called when the result is clicked.
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement>, name?: string) => void;
  /**
   * Provides additional styling to a search result.
   */
  className?: string;
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
  /**
   * The result's content.
   */
  children?: React.ReactNode;
}

export default function SearchResult({
  name,
  onClick = () => {},
  className,
  dataTestId,
  children
}: SearchResultProps): JSX.Element 
{
  return (
    <div 
      className={classNames(className, styles.result)}
      onClick={(e) => onClick(e, name)}
      data-testid={dataTestId}
    >
      {children}
    </div>
  )
}

SearchResult.displayName = 'SearchResult';