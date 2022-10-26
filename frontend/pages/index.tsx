import React, { ChangeEvent, FormEvent } from 'react';
import Button from '../components/atoms/Button';
import Layout from '../components/layout';
import FormInput from '../components/molecules/FormInput';
import Form from '../components/organisms/Form';

export default function Home() {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <FormInput
          text={'아이디'}
          htmlFor={'userId'}
          type={'text'}
          placeholder={'아이디를 입력해주세요'}
          onChange={onChange}
        />
        <FormInput
          text={'비밀번호'}
          htmlFor={'userPassword'}
          type={'password'}
          placeholder={'비밀번호를 입력해주세요'}
          onChange={onChange}
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
    </Layout>
  );
}
