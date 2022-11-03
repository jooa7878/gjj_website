import axios from 'axios';

export const login = async (data: { email: string; password: string }) => {
  const options = {
    method: 'POST',
    url: `http://localhost:8000/auth/login`,
    data,
  };

  const { data: loginData } = await axios(options);

  return loginData;
};
