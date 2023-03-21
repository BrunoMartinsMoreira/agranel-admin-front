import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../Pages/Dashboad/Dashboard';
import { LoginPage } from '../Pages/Login/LoginPage';
import { ProductsPage } from '../Pages/Products/ProductsPage';
import { RegisterPage } from '../Pages/Register/RegisterPage';
import { AuthenticatedLayout } from './Layouts/AuthenticatedLayout';
import { PrivateRoute } from './PrivateRoute';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route
        path='/*'
        element={<h1>Ainda estou desenvolvendo essa merda, calma ai</h1>}
      />
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
      </Route>
    </Routes>
  );
};
