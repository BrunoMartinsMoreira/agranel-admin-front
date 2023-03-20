import { handleLogin } from '../api/loginApi';
import { LoginFormData } from '../Pages/Login/LoginSchema';
import { IUserLoginResponse } from '../types/User';

export const useAuth = () => {
  const login = async ({ email, password }: LoginFormData) => {
    const authUser = await handleLogin({ email, password });
    localStorage.setItem('authUser', JSON.stringify(authUser));

    return authUser;
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
  };
};
