import React, { CSSProperties } from "react";

import type { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

import Loading from "../Loading/Loading";
import AuthSvgSelector from "../../../assets/images/icons/auth/AuthSvgSelector";

import { BORDER_COLOR, GREY_COLOR } from '../../../configs/config';

import styles from "./Field.module.scss";

interface FieldProps {
  register: UseFormRegister<FieldValues>;
  name: string;
  options?: RegisterOptions;
  error?: string;
  customClassName?: string;
  startIconId?: string;
  placeholder?: string;
  isSecret?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
}

const Field: React.FC<FieldProps> = ({
    register,
    name,
    options,
    error,
    customClassName,
    startIconId,
    placeholder,
    isSecret,
    value,
    onChange,
    isLoading
  }) => {
  const [helperText, setHelperText] = React.useState<string | undefined>('');
  const [showPassword, setShowPassword] = React.useState<boolean>(!isSecret);

  const fieldClassName = customClassName ? `${styles.field} ${customClassName}` : styles.field;
  const inputStyles: CSSProperties = {
    paddingLeft: startIconId ? '40px' : '10px',
    borderColor: error ? 'red' : BORDER_COLOR
  };
  const helperStyles: CSSProperties = {
    color: error? 'red' : GREY_COLOR
  };

  React.useEffect(() => {
    setHelperText(error || placeholder);
  }, [error, placeholder]);

  const changePassVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={fieldClassName}>
      {isLoading ?
        <Loading customClassName={styles.loading} /> :
        startIconId && <AuthSvgSelector iconId={startIconId} className={styles.icon} />}
      {isSecret &&
        <div onClick={changePassVisibility} className={styles.icon} id={styles.visibility}>
          <AuthSvgSelector iconId={showPassword ? 'visibility' : 'visibilityOff'} id={styles.visibility} />
        </div>
      }
      {helperText &&
        <div className={styles.helperText} style={helperStyles}>
          {helperText}
        </div>
      }
      <input
        {...register(name, options)}
        name={name}
        className={styles.input}
        style={inputStyles}
        type={showPassword ? 'text' : 'password'}
        {...(value ? { value } : {})}
        {...(onChange ? { onChange } : {})}
      />
    </div>
  );
};

export default React.memo(Field);
