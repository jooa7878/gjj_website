import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { login } from '../../apis/request/auth';
import { setAuth } from '../../utils/auth';

export const useLogin = () => {
  return useMutation(login, {
    onSettled: (res) => {
      if (res.success) {
        // 로그인 성공
        setAuth(res.data.token);
      } else {
        // 로그인 실패
      }
    },
  });
};
