import { useState } from 'react';
import Button from '../../atoms/Button';
import Search from '../../molecules/Search';
import styles from './styles';

interface BarProps {}

const SearchBar = () => {
  const [userName, setUserName] = useState('');

  const handleAddButtonClick = () => {};

  return (
    <div css={styles.container}>
      <Search userName={userName} setUserName={setUserName} />
      <Button
        text={'추가'}
        width={100}
        paddingX={10}
        paddingY={10}
        backgroundColor={'#3888FF'}
        color={'#FFF'}
        type={'button'}
        marginX={0}
        marginY={0}
      />
    </div>
  );
};

export default SearchBar;
