import { NextPage } from 'next';
import Layout from '../../components/layout';
import GNB from '../../components/molecules/GNB';
import SearchBar from '../../components/organisms/SearchBar';
import UsersList from '../../components/organisms/UsersList';
import { useUsers } from '../../hooks/query/user';
import { logout } from '../../utils/auth';

const ListPage: NextPage = () => {
  return (
    <Layout title='구리 유도관 & 와이어 주짓수'>
      <GNB text='관원 리스트' onClick={logout} />
      <SearchBar />
      <UsersList />
    </Layout>
  );
};

export default ListPage;
