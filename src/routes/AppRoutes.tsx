import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../Pages/Login/LoginPage';
// import { Products } from '../components/Products/Products';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/dashboard' element={<h1>dashboard page</h1>} />
    </Routes>
  );
};
