import React, { useState } from "react";
import styles from "../nav.module.scss";
import { Link } from "react-router-dom";
import { authLinks, homeLink, navLinks } from "../../../../utils/nav-links";

const MobileNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to={homeLink.href}>
        <img src={homeLink.iconPath} />
      </Link>
      <div
        className={styles.mobileMenuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✖" : "☰"}
      </div>
      {isMenuOpen && (
        <ul className={styles.mobileMenu}>
          {navLinks.map((item) => (
            <li key={item.href} className={styles.navItem}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
          {authLinks.map((item) => (
            <li key={item.href} className={styles.navItem}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default MobileNavbar;
