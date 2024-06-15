import React from 'react';

import Loading from "../Loading/Loading";

import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  customClassName?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    customClassName,
    disabled,
    isLoading,
    onClick
  }) => {
  const buttonClassName = customClassName ? `${styles.button} ${customClassName}` : styles.button;

  return (
    <button className={buttonClassName} disabled={disabled || isLoading} onClick={onClick}>
      {isLoading ? <Loading /> : children}
    </button>
  );
};

export default React.memo(Button);
