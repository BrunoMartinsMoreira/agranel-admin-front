import { LoginFormData } from '../Pages/Login/LoginSchema';
import { IUserLoginResponse } from '../types/User';
import { api } from './baseApi';

export const handleLogin = async ({
  email,
  password,
}: LoginFormData): Promise<IUserLoginResponse> => {
  const response = await api.post('/auth/login', {
    email,
    password,
  });

  return response.data;
};
