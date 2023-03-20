import { useAuth } from '../hooks/useAuth';
import { LoginPage } from '../Pages/Login/LoginPage';

type PrivateRouteProps = {
  children: JSX.Element;
};

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { getUser } = useAuth();
  const user = getUser();

  if (!user?.access_token) return <LoginPage />;

  return children;
};
