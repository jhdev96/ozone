import React from 'react';
import classNames from '../../utils/classNames';
import { ThemeType } from '../../utils/theme';
import styles from './index.module.scss';


interface SectionProps {
  /** 
   * The title displayed at the top of 
   * the section. 
   */
  title?: string;
  /** 
   * The main section classes. 
   */
  variation?: "primary" | "basic";
  /** 
   * Change the color of the text inside the 
   * section body to match the theme. 
   */
  theme?: ThemeType;
  /** 
   * Indicates whether the section should occupy 
   * the full width of its container. 
   */
  fullWidth?: boolean;
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
  /** 
   * The content rendered inside a section. 
   */
  children?: React.ReactNode;
}

export default function Section({
  title       = "Section title",
  variation   = "primary",
  theme       = "light",
  fullWidth   = true,
  dataTestId,
  children
}: SectionProps): JSX.Element 
{
  return (
    <section 
      className={classNames(
        styles.section,
        styles[variation],
        styles[theme], 
        fullWidth && styles.fullWidth,
      )}
      data-testid={dataTestId}
    >
      <div className={styles.topLeftBorder} />
      <div className={styles.header}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.topRightBorder} />
      </div>
      <div className={styles.body}>
        {children}
      </div>
    </section> 
  )
}

Section.displayName = 'Section';