import { Routes, Route } from 'react-router-dom';
import { AddProductPage } from '../Pages/Products/AddProductPage';
import { Dashboard } from '../Pages/Dashboad/Dashboard';
import { EditProductPage } from '../Pages/Products/EditProductPage';
import { LoginPage } from '../Pages/Login/LoginPage';
import { NotFoundPage } from '../Pages/NotFoundPage/NotFoundPage';
import { ListProductsPage } from '../Pages/Products/ListProductsPage';
import { RegisterPage } from '../Pages/Register/RegisterPage';
import { AuthenticatedLayout } from './Layouts/AuthenticatedLayout';
import { PrivateRoute } from './PrivateRoute';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/*' element={<NotFoundPage />} />
      <Route path='/' element={<AuthenticatedLayout />}>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path='/products'
          element={
            <PrivateRoute>
              <ListProductsPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/products/new'
          element={
            <PrivateRoute>
              <AddProductPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/product/edit'
          element={
            <PrivateRoute>
              <EditProductPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
