import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
};

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { getUser } = useAuth();
  const user = getUser();

  if (!user?.access_token) return <Navigate to='/' />;

  return children;
};
