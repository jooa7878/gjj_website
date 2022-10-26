import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import styles from './style';

interface InputProps {
  placeholder: string;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ placeholder, onChange, type }: InputProps) => {
  return (
    <input
      css={styles.input}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
