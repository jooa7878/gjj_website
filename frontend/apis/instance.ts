import axios from 'axios';
import { getAuth } from '../utils/auth';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

const isAuth = getAuth();

if (isAuth?.accessToken) {
  instance.defaults.headers['accesstoken'] = isAuth.accessToken;
}

instance.interceptors.request.use(
  (config) => {
    // refresh token 관련 처리 하기
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.message === 'canceled') {
      console.log(error);
      return;
    }
    const {
      config,
      response: { status },
    } = error;

    const originalRequest = config;

    if (status === 400 || status === 403) {
      // refresh token 관련 처리하기
    }
  },
);
export default instance;
