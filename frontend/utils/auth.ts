import { load, save, remove } from 'react-cookies';
import instance from '../apis/instance';

export function getAuth() {
  if (typeof window !== undefined) {
    const accessToken = load('accesstoken');
    return {
      accessToken,
    };
  }

  return null;
}

export function setAuth(accessToken: string) {
  instance.defaults.headers['accesstoken'] = accessToken;

  const accessExpires = new Date();
  accessExpires.setTime(accessExpires.getTime() + 1000 * 60 * 60 * 1);

  save('accesstoken', accessToken, {
    path: '/',
    expires: accessExpires,
    httpOnly: false, // Todo: dev/prod에 따라 분기 처리
  });
}

export function logout() {
  try {
    // {instance}.defaults.headers['accesstoken'] = null;
    remove('accesstoken', { path: '/' });
  } catch (error) {
    throw error;
  } finally {
    location.reload();
  }
}
