import axios from 'axios';

export const login = async (data: { email: string; password: string }) => {
  const options = {
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    data,
  };

  const { data: loginData } = await axios(options);

  return loginData;
};
