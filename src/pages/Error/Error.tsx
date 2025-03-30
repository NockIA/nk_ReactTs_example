import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { navLinks } from '../../common/constants/NAV_LINKS';
import styles from './Error.module.scss';

const ErrorPage: React.FC = () => {
  // ### Modification du titre de la page ### //
  useEffect(() => {
    document.title = 'Nk | 404';
  }, []);

  return (
    <div className={styles.error_page}>
      <img src="/assets/images/others/error-cat.png" />
      <div className={styles.error_content}>
        <h1>404 Error</h1>
        <p>
          We couldn’t find the page you <br />
          were looking for
        </p>
        <Link to={navLinks.home.href}>Go back to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
