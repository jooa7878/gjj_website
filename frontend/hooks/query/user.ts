import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { getUsers } from '../../apis/request/user';

export const useUsers = () => {
  return useQuery(['USERS'], getUsers, {
    onError: (err: AxiosError) => {
      // 유저 정보 가져오기 데이터 실패
      console.log(err.response?.data);
    },
  });
};
