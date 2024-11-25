import React from "react";
import styles from "../nav.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { authLinks, homeLink, navLinks } from "../../../../constants/nav-links";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../services/auth/auth-slice";
import { RootState } from "../../../../services/store/store";

const DesktopNavbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ### Récupération de l'état de connexion de l'utilisateur ### //
  const isAuthenticated = useSelector((state: RootState) => !!state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to={homeLink.href}>
        <img src={homeLink.iconPath} />
      </Link>

      {/* ### Liens pages ### */}
      <ul className={styles.navList}>
        {navLinks.map((item) => (
          <li key={item.href} className={styles.navItem}>
            <Link to={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* ### Actions d'Authentification ### */}
      <ul className={styles.buttonList}>
        {isAuthenticated ? (
          <button className={styles.button} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          authLinks.map((item) => (
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
