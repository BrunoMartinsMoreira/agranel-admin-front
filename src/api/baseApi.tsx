import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import { IUserLoginResponse } from '../types/User';

const usersString = localStorage.getItem('authUser');
const user = usersString
  ? (JSON.parse(usersString) as IUserLoginResponse)
  : null;

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    Content: 'application/json',
  },
});

api.interceptors.request.use((config) => {
  if (user) {
    if (config.headers)
      config.headers.Authorization = `Bearer ${user.access_token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: any) => {
    const originalReq = error.config;
    const { refresh, apiLogout } = useAuth();
    if (user && error.response?.status === 401) {
      if (error.response.data?.message === 'invalid_or_missing_token') {
        const response = await refresh({
          refresh_token: user.refresh_token,
          userId: user.id,
        });

        if (response.access_token) {
          localStorage.setItem('authUser', JSON.stringify(response));
          const { access_token } = response;
          originalReq.headers['Authorization'] = `Bearer ${access_token}`;

          return axios(originalReq);
        }
      } else {
        await apiLogout();
      }
    }
  },
);

export { api };
