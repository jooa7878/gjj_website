import { useUsers } from '../../../hooks/query/user';
import ListItem from '../../atoms/ListItem';
import List from '../../molecules/List';

const UsersList = () => {
  const { isLoading, data } = useUsers();

  if (isLoading) return <div>Loading ...</div>;
  console.log(data);

  return (
    <List>
      {data.map((item: { name: string; dueDate: string }) => (
        <ListItem text={item.name} dueDate={item.dueDate} />
      ))}
    </List>
  );
};

export default UsersList;
