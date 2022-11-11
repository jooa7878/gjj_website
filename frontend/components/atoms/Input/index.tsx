import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import styles from './style';

interface InputProps {
  placeholder: string;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string | number;
}

const Input = ({ placeholder, onChange, type, value }: InputProps) => {
  return (
    <input
      css={styles.input}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
