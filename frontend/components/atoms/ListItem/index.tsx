import { css } from '@emotion/react';
import { useDeleteUser, useUser } from '../../../hooks/query/user';
import Button from '../Button';
import styles from './styles';

const ListItem = ({
  text,
  dueDate,
  id,
}: {
  text: string;
  dueDate: string;
  id: string;
}) => {
  const { mutate } = useDeleteUser();
  const handleDeleteClick = (id: string) => {
    mutate(id);
  };

  return (
    <li css={styles.li}>
      <span
        css={css`
          width: 100px;
        `}
      >
        {text}
      </span>
      <span>{dueDate}</span>
      <div>
        <Button
          text={'수정'}
          width={'50'}
          paddingX={3}
          paddingY={3}
          backgroundColor={'#D2D2D2'}
          marginX={10}
          marginY={0}
          color={'black'}
          type={'button'}
        />
        <Button
          text={'삭제'}
          width={'50'}
          paddingX={3}
          paddingY={3}
          backgroundColor={'#FF5900'}
          marginX={0}
          marginY={0}
          color={'white'}
          type={'button'}
          onClick={() => handleDeleteClick(id)}
        />
      </div>
    </li>
  );
};

export default ListItem;
