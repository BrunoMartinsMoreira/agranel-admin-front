import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../Pages/Login/LoginPage';
import { RegisterPage } from '../Pages/Register/RegisterPage';
// import { Products } from '../components/Products/Products';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
};
