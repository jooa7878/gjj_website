import { FormEventHandler, ReactNode } from 'react';
import styles from './style';

interface ListProps {
  children: ReactNode;
}

const List = ({ children }: ListProps) => {
  return <ul css={styles.list}>{children}</ul>;
};

export default List;
