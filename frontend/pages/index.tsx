import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/layout';
import LoginForm from '../components/organisms/LoginForm';
import { getAuth } from '../utils/auth';

const LoginPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (!!getAuth()?.accessToken) {
      const fallback = router.query.fallback as string;
      router.push(fallback ?? '/list');
    }
  }, []);
  return (
    <Layout title='로그인 | 구리 유도관 & 와이어 주짓수'>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
