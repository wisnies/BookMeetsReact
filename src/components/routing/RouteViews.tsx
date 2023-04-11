import { Routes, Route } from 'react-router-dom';
import RequireAuth from './RequireAuth';
import RequireGuest from './RequireGuest';
import DashboardPage from '../pages/DashboardPage';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const RouteViews: React.FC = () => {
  return (
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route path='/auth'>
        <Route
          path='login'
          element={
            <RequireGuest>
              <LoginPage />
            </RequireGuest>
          }
        />
        <Route
          path='register'
          element={
            <RequireGuest>
              <RegisterPage />
            </RequireGuest>
          }
        />
      </Route>
      <Route
        path='/dashboard'
        element={
          <RequireAuth>
            <DashboardPage />
          </RequireAuth>
        }
      />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default RouteViews;
