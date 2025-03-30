import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { authLinks, navLinks } from '../../../constants/NAV_LINKS';
import { logout } from '../../../services/Store/Slices/authSlice';
import { RootState } from '../../../services/Store/store';
import styles from '../Navigation.module.scss';

const DesktopNavbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ### Récupération de l'état de connexion de l'utilisateur ### //
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate(authLinks.login.href);
  };

  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to={navLinks.home.href}>
        <img src={'/assets/images/others/logo.ico'} />
      </Link>

      {/* ### Liens pages ### */}
      <ul className={styles.nav_list}>
        {Object.values(navLinks).map((item) => (
          <li key={item.href} className={styles.nav_item}>
            <Link to={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* ### Actions d'Authentification ### */}
      <ul className={styles.button_list}>
        {isAuthenticated ? (
          <button className={styles.logout} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          Object.values(authLinks).map((item) => (
            <li key={item.href} className={styles.button}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))
        )}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
