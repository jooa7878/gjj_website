import React, { Dispatch, SetStateAction, useState } from 'react';
import { useUser } from '../../../hooks/query/user';
import SearchIcon from '../../../styles/svg/SearchIcon';
import Input from '../../atoms/Input';
import styles from './styles';

interface SearchProps {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
}

const Search = ({ userName, setUserName }: SearchProps) => {
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value);
  };

  const { mutate } = useUser();

  const handleSearchClick = () => {
    mutate(userName);
  };

  return (
    <div css={styles.container}>
      <Input
        placeholder={'관원 이름을 입력해주세요'}
        type={'text'}
        onChange={handleUserNameChange}
        value={userName}
      />

      <button type='button' css={styles.button} onClick={handleSearchClick}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
