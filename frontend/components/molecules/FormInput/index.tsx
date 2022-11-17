import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
} from 'react';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import styles from './style';

interface FormInputProps {
  text: string;
  htmlFor: string;
  placeholder: string;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string | number;
}

const FormInput = ({
  text,
  htmlFor,
  type,
  placeholder,
  onChange,
  value,
}: FormInputProps) => {
  return (
    <div css={styles.container}>
      <Label text={text} htmlFor={htmlFor} />
      <Input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default FormInput;
