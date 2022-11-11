import instance from '../instance';

export const getUsers = async () => {
  const options = {
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_URL}/users`,
  };

  const { data } = await instance(options);

  return data;
};

export const getUser = async (name: string) => {
  const options = {
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_API_URL}/users/${name}`,
  };

  const { data } = await instance(options);

  return data;
};
