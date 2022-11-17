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

export const deleteUser = async (id: string) => {
  const options = {
    method: 'DELETE',
    url: `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
  };

  const res = await instance(options);

  console.log(res);
  return res.data;
};
