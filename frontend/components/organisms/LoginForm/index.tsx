import { useState } from 'react';
import { login } from '../../../apis/request/auth';
import { useLogin } from '../../../hooks/query/auth';
import Button from '../../atoms/Button';
import Form from '../../molecules/Form';
import FormInput from '../../molecules/FormInput';

const LoginForm = () => {
  const [userID, setUserID] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const { mutate } = useLogin();

  const handleUserIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserID(e.currentTarget.value);
  };

  const handleUserPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ email: userID, password: userPassword });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        text={'아이디'}
        htmlFor={'userId'}
        type={'text'}
        placeholder={'아이디를 입력해주세요'}
        onChange={handleUserIDChange}
      />
      <FormInput
        text={'비밀번호'}
        htmlFor={'userPassword'}
        type={'password'}
        placeholder={'비밀번호를 입력해주세요'}
        onChange={handleUserPasswordChange}
      />
      <Button
        text={'로그인'}
        width={250}
        paddingX={20}
        paddingY={10}
        backgroundColor={'#3888FF'}
        color={'white'}
        type={'submit'}
      />
    </Form>
  );
};

export default LoginForm;
