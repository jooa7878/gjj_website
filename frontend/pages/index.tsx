import { NextPage } from 'next';
import Layout from '../components/layout';
import LoginForm from '../components/organisms/LoginForm';

const LoginPage: NextPage = () => {
  return (
    <Layout title='로그인 | 구리 유도관 & 와이어 주짓수'>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
