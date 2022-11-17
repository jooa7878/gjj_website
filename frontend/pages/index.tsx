import { NextPage } from 'next';
import Layout from '../components/layout';
import LoginForm from '../components/organisms/LoginForm';
import { useLogin } from '../hooks/query/auth';

const LoginPage: NextPage = () => {
  const { mutate } = useLogin();

  const handleSubmit = (email: string, password: string) => {
    mutate({ email, password });
  };
  return (
    <Layout title='로그인 | 구리 유도관 & 와이어 주짓수'>
      <LoginForm onSubmit={handleSubmit} />
    </Layout>
  );
};

export default LoginPage;
