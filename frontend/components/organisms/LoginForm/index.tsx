import { useCallback, useState } from 'react';
import Button from '../../atoms/Button';
import Form from '../../molecules/Form';
import FormInput from '../../molecules/FormInput';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [userID, setUserID] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleUserIDChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserID(e.currentTarget.value);
    },
    [setUserID],
  );

  const handleUserPasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserPassword(e.currentTarget.value);
    },
    [setUserPassword],
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(userID, userPassword);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        text={'아이디'}
        htmlFor={'userId'}
        type={'text'}
        placeholder={'아이디를 입력해주세요'}
        onChange={handleUserIDChange}
        value={userID}
      />
      <FormInput
        text={'비밀번호'}
        htmlFor={'userPassword'}
        type={'password'}
        placeholder={'비밀번호를 입력해주세요'}
        onChange={handleUserPasswordChange}
        value={userPassword}
      />
      <Button
        text={'로그인'}
        width={250}
        paddingX={20}
        paddingY={10}
        backgroundColor={'#3888FF'}
        color={'white'}
        type={'submit'}
        marginX={0}
        marginY={20}
      />
    </Form>
  );
};

export default LoginForm;
