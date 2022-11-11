import { AxiosError } from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getUser, getUsers } from '../../apis/request/user';

export const useUsers = () => {
  return useQuery(['USERS'], getUsers, {
    onError: (err: AxiosError) => {
      // 유저 정보 가져오기 데이터 실패
      console.log(err.response?.data);
    },
  });
};

export const useUser = () => {
  const queryClient = useQueryClient();

  return useMutation(getUser, {
    onSettled: (resultCode) => {
      console.log(resultCode);
      queryClient.invalidateQueries(['USERS']);
    },
    onError: (err: AxiosError) => {
      // 유저 정보 가져오기 데이터 실패
      console.log(err.response?.data);
    },
  });
};
