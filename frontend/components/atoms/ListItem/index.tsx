import styles from './styles';

const ListItem = ({ text, dueDate }: { text: string; dueDate: string }) => {
  return (
    <li css={styles.li}>
      <span>{text}</span>
      <span>{dueDate}</span>
    </li>
  );
};

export default ListItem;
