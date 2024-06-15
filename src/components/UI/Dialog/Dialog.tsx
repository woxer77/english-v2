import React from 'react';

import styles from './Dialog.module.scss';

interface DialogProps {
  children: React.ReactNode;
  customClassName?: string;
  style?: React.CSSProperties;
}

const Dialog: React.FC<DialogProps> = ({ children, customClassName, style }) => {
  const dialogStyles = customClassName ? `${styles.dialog} ${customClassName}` : styles.dialog;

  return (
    <div className={dialogStyles} style={style}>
      {children}
    </div>
  );
};

export default Dialog;
