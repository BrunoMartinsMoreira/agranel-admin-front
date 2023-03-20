import { createContext, ReactNode, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { LoginFormData } from '../Pages/Login/LoginSchema';
import { IUserLoginResponse } from '../types/User';

type AuthContextData = {
  signIn(data: LoginFormData): Promise<IUserLoginResponse | undefined>;
  authUser: IUserLoginResponse;
};

const AuthContext = createContext({} as AuthContextData);

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { login } = useAuth();

  const [userCredentials, setUserCredentials] = useState<IUserLoginResponse>(
    {} as IUserLoginResponse,
  );

  const signIn = async ({ email, password }: LoginFormData) => {
    const response = await login({ email, password });
    setUserCredentials(response);
    return response;
  };

  return (
    <AuthContext.Provider value={{ signIn, authUser: userCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
