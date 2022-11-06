import React, { ChangeEvent, FormEvent } from 'react';
import Button from '../../components/atoms/Button';
import Layout from '../../components/layout';
import FormInput from '../../components/molecules/FormInput';
import Form from '../../components/molecules/Form';
import LoginForm from '../../components/organisms/LoginForm';
import { NextPage } from 'next';

const LoginPage: NextPage = () => {
  return (
    <Layout title='로그인 | 구리 유도관 & 와이어 주짓수'>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
