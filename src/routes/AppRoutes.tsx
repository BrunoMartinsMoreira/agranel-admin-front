import { Routes, Route } from 'react-router-dom';
import { AddProductPage } from '../Pages/AddProductPage/AddProductPage';
import { Dashboard } from '../Pages/Dashboad/Dashboard';
import { LoginPage } from '../Pages/Login/LoginPage';
import { NotFoundPage } from '../Pages/NotFoundPage/NotFoundPage';
import { ProductsPage } from '../Pages/Products/ProductsPage';
import { RegisterPage } from '../Pages/Register/RegisterPage';
import { AuthenticatedLayout } from './Layouts/AuthenticatedLayout';
import { PrivateRoute } from './PrivateRoute';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/*' element={<NotFoundPage />} />
      <Route path='/admin' element={<AuthenticatedLayout />}>
        <Route
          path='/admin/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path='/admin/products'
          element={
            <PrivateRoute>
              <ProductsPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/admin/products/new'
          element={
            <PrivateRoute>
              <AddProductPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
