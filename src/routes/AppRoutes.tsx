import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../Pages/Dashboad/Dashboard';
import { LoginPage } from '../Pages/Login/LoginPage';
import { ProductsPage } from '../Pages/Products/ProductsPage';
import { RegisterPage } from '../Pages/Register/RegisterPage';
import { AuthenticatedLayout } from './Layouts/AuthenticatedLayout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route
        path='/*'
        element={<h1>Ainda estou desenvolvendo essa merda, calma ai</h1>}
      />
      <Route path='/' element={<AuthenticatedLayout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/products' element={<ProductsPage />} />
      </Route>
    </Routes>
  );
};
