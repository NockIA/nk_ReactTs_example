import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootState } from '../common/services/Store/store';
import { authLinks } from '../common/constants/NAV_LINKS';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return isAuthenticated ? <>{children}</> : <Navigate to={authLinks.login.href} />;
};

export default ProtectedRoute;
