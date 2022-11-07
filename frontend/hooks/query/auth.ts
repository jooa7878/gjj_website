import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { login } from '../../apis/request/auth';
import { setAuth } from '../../utils/auth';

export const useLogin = () => {
  const router = useRouter();

  return useMutation(login, {
    onSettled: (res) => {
      if (res.success) {
        // 로그인 성공
        setAuth(res.data.token);
        router.push('/list');
      } else {
        // 로그인 실패
        // 실패 모달 띄워주기
      }
    },
    onError: (err: AxiosError) => {
      console.log(err.response?.data);
    },
  });
};
