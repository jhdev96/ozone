import React, { useState, useEffect, useRef } from 'react';
import { ThemeType } from '../../utils/theme';
import classNames from '../../utils/classNames';
import Header from './Header';
import Title from './Title';
import Body from './Body';
import Footer from './Footer';
import ClickManager from '../ClickManager';
import styles from './index.module.scss';


interface ModalProps {
  /** 
   * Give the modal a light or dark appearance. 
   */
  theme?: ThemeType;
  /** 
   * Indicates whether the modal should be visible. 
   */
  isVisible?: boolean;
  /** 
   * Callback to be invoked when the modal is closed. 
   */
  onClose?: () => void;
  /**
   * A selector used in testing environments.
   */
  dataTestId?: string;
  /** 
   * The content that will be rendered inside the modal. 
   */
  children?: React.ReactNode;
}

export default function Modal({
  theme     = 'light',
  isVisible = false,
  onClose   = () => {},
  dataTestId,
  children
}: ModalProps): JSX.Element 
{
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>();

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  const handleClose = () => {
    if (visible) {
      onClose();
      setVisible(false);
    }
  }

  return (
    <div 
      className={classNames(
        styles.modal, 
        visible && styles.visible,
        styles[theme]
      )}
      data-testid={dataTestId}
    >
      <ClickManager 
        onClick={handleClose} 
        ref={wrapperRef}
      >
        <div className={styles.modalDialog}>
          <div className={styles.modalContent}>
            {children}
          </div>
        </div>
      </ClickManager>
    </div>
  );
}

Modal.Header = Header;
Modal.Title = Title;
Modal.Body = Body;
Modal.Footer = Footer;

Modal.displayName = 'Modal';