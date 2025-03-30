import React, { useState } from 'react';

import { Menu, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { authLinks, navLinks } from '../../../constants/NAV_LINKS';
import { logout } from '../../../services/Store/Slices/authSlice';
import { RootState } from '../../../services/Store/store';
import styles from '../Navigation.module.scss';

const MobileNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      <button className={styles.mobile_menu_button} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
      {isMenuOpen && (
        <ul className={styles.mobile_menu}>
          {/* ### Pages ### */}
          {Object.values(navLinks).map((item) => (
            <li key={item.href} className={styles.nav_item}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
          {/* ### Actions ### */}
          {isAuthenticated ? (
            <button className={styles.logout} onClick={handleLogout}>
              Logout
            </button>
          ) : (
            Object.values(authLinks).map((item) => (
              <li key={item.href} className={styles.nav_item}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))
          )}
        </ul>
      )}
    </nav>
  );
};

export default MobileNavbar;
