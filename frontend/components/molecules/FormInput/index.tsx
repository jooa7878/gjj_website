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
}

const FormInput = ({
  text,
  htmlFor,
  type,
  placeholder,
  onChange,
}: FormInputProps) => {
  return (
    <div css={styles.container}>
      <Label text={text} htmlFor={htmlFor} />
      <Input type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default FormInput;
