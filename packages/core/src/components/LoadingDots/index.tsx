import React, { Component } from 'react';
import classNames from '../../utils/classNames';
import { ThemeType } from '../../utils/theme';
import styles from './index.module.scss';


export interface LoadingDotsProps {
  /** 
   * Sets the size of the loading dots.
   */
  dotSize?: number;
  /** 
   * Positions the loading dots relative
   * to the container component.
  */
  position?: 'left' | 'center' | 'right';
  /** 
   * Alter the color of the dots to match
   * a given theme.
   */
  theme?: ThemeType | "blue" | "red";
  /**
   * Gives the loading dots additional css
   * styling.
   */
  className?: string;
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
}

interface LoadingDotsState {visibleBox: 1 | 2 | 3 | 4};

type StyleReturnType = {
  opacity: number | undefined, 
  minHeight: number | undefined, 
  minWidth: number | undefined
};

class LoadingDots extends Component<LoadingDotsProps, LoadingDotsState> {
  public static displayName = 'LoadingDots';

  public static defaultProps = {
    dotSize: 7,
    positon: 'center',
    theme: 'light'
  };

  readonly state: LoadingDotsState = {visibleBox: 1};
  animate: NodeJS.Timer = setTimeout(() => {});

  componentDidMount() {
    clearTimeout(this.animate);
    
    this.animate = setInterval(() => {
      const {visibleBox} = this.state;
      let nextBox: 1 | 2 | 3 | 4;
      
      switch (visibleBox) {
        case 1:
          nextBox = 2;
          break;
        case 2:
          nextBox = 3;
          break;
        case 3:
          nextBox = 4;
          break;
        default:
          nextBox = 1;
      }
      this.setState({visibleBox: nextBox});
    }, 250);
  }

  componentWillUnmount() {
    clearInterval(this.animate);
  }

  private setStyle = (boxNumber: number): StyleReturnType => {
    const {visibleBox} = this.state;
    const {dotSize} = this.props;

    let dotDims = {minHeight: dotSize, minWidth: dotSize};
    if (visibleBox === boxNumber) {
      return {
        opacity: 1,
        ...dotDims
      }
    } 
    return {opacity: 0, ...dotDims}
  }

  public render(): JSX.Element {
    const {position, theme, className, dataTestId} = this.props;
    return (
      <div 
        className={classNames(
          className,
          styles.loader, 
          theme     && styles[theme],
          position  && styles[position]
        )}
        data-testid={dataTestId}
      >
        <div className={styles.top}>
          <div className={styles.box} style={this.setStyle(1)} />
          <div className={styles.box} style={this.setStyle(2)} />
        </div>
        <div className={styles.bottom}>
          <div className={styles.box} style={this.setStyle(4)} />
          <div className={styles.box} style={this.setStyle(3)} />
        </div>
      </div>
    )
  }
}

export default LoadingDots;