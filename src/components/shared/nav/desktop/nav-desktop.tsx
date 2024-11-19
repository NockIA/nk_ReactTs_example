import React from "react";
import styles from "../nav.module.scss";
import { Link } from "react-router-dom";
import { authLinks, homeLink, navLinks } from "../../../../utils/nav-links";

const DesktopNavbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to={homeLink.href}>
        <img src={homeLink.iconPath} />
      </Link>
      <ul className={styles.navList}>
        {navLinks.map((item) => (
          <li key={item.href} className={styles.navItem}>
            <Link to={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <ul className={styles.buttonList}>
        {authLinks.map((item) => (
          <li key={item.href} className={styles.button}>
            <Link to={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
