import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../Pages/Dashboad/Dashboard';
import { LoginPage } from '../Pages/Login/LoginPage';
import { ProductsPage } from '../Pages/Products/ProductsPage';
import { RegisterPage } from '../Pages/Register/RegisterPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/products' element={<ProductsPage />} />
    </Routes>
  );
};
