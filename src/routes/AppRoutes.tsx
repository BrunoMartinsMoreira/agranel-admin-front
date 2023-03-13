import { Routes, Route } from 'react-router-dom';
import { Products } from '../components/Products/Products';
import { DefaultLayout } from '../layouts/DefaultLayout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Products />} />
        <Route path='/dashboard' element={<h1>dashboard page</h1>} />
      </Route>
    </Routes>
  );
};
