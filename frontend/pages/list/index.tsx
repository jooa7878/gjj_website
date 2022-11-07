import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../../components/layout';
import GNB from '../../components/molecules/GNB';
import { getAuth, logout } from '../../utils/auth';

const ListPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (!getAuth()?.accessToken) router.push('/');
  }, []);
  return (
    <Layout title='구리 유도관 & 와이어 주짓수'>
      <GNB text='회원 리스트' onClick={logout} />
    </Layout>
  );
};

export default ListPage;
