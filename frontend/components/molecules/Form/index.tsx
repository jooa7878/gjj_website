import { FormEventHandler, ReactNode } from 'react';
import styles from './style';

interface FormProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form onSubmit={onSubmit} css={styles.form}>
      {children}
    </form>
  );
};

export default Form;
