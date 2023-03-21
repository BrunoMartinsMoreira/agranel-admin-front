import { api } from '../api/baseApi';
import { LoginFormData } from '../Pages/Login/LoginSchema';
import { IUserLoginResponse } from '../types/User';

interface IRefreshToken {
  refresh_token: string;
  userId: string;
}

export const useAuth = () => {
  const login = async ({
    email,
    password,
  }: LoginFormData): Promise<IUserLoginResponse> => {
    const response = await api.post('/auth/login', {
      email,
      password,
    });

    localStorage.setItem('authUser', JSON.stringify(response.data));

    return response.data;
  };

  const refresh = async ({
    userId,
    refresh_token,
  }: IRefreshToken): Promise<IUserLoginResponse> => {
    const response = await api.post('/auth/refresh', {
      refresh_token,
      userId,
    });

    return response.data;
  };

  const apiLogout = async () => {
    await api.post('/auth/logout');
    logout();
  };

  const logout = () => {
    localStorage.removeItem('authUser');
  };

  const getUser = (): IUserLoginResponse | null => {
    const userStr = localStorage.getItem('authUser');
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  };

  return {
    login,
    logout,
    getUser,
    refresh,
    apiLogout,
  };
};
