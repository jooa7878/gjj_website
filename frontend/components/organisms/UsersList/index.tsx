import { useUsers } from '../../../hooks/query/user';

import ListItem from '../../atoms/ListItem';
import List from '../../molecules/List';

const UsersList = () => {
  const { isLoading, data } = useUsers();

  if (isLoading) return <div>Loading ...</div>;

  return (
    <List>
      {data.map((item: { name: string; dueDate: string }, idx: number) => (
        <ListItem
          key={item.name + item.dueDate + idx}
          text={item.name}
          dueDate={item.dueDate}
        />
      ))}
    </List>
  );
};

export default UsersList;
