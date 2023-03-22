import { api } from '../api/baseApi';
import { ICreateUser } from '../Pages/Register/RegisterSchema';
import { IApiResponse } from '../types/ApiResponse';
import { IUser } from '../types/User';

export const useUsersApi = () => {
  const createUser = async ({
    email,
    name,
    password,
  }: ICreateUser): Promise<IApiResponse<IUser>> => {
    const response = await api.post('/users', {
      name,
      email,
      password,
    });

    return response.data;
  };

  return {
    createUser,
  };
};
