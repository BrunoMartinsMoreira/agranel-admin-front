import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../Pages/Dashboad/Dashboard';
import { LoginPage } from '../Pages/Login/LoginPage';
import { RegisterPage } from '../Pages/Register/RegisterPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
};
