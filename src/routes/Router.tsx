import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';
import ErrorPage from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import PrivateRoute from './ProtectedRoute';
import { authLinks, navLinks } from '../common/constants/NAV_LINKS';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ### Routes non protégées ### */}
        <Route path={authLinks.login.href} element={<Login />} />
        <Route path={authLinks.register.href} element={<Register />} />
        {/* ### Routes protégées ### */}
        <Route
          path={navLinks.home.href}
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        {/* ### Routes Not Found ### */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
