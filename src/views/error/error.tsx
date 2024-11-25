import { Link } from "react-router-dom";
import { homeLink } from "../../constants/nav-links";
import styles from "./error.module.scss";
import { useEffect } from "react";

const ErrorPage: React.FC = () => {
  // ### Modification du titre de la page ### //
  useEffect(() => {
    document.title = "Nk | 404";
  }, []);

  return (
    <div className={styles.errorPage}>
      <div className={styles.errorContainer}>
        <h1 className={styles.errorCode}>404</h1>
        <p className={styles.errorMessage}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to={homeLink.href} className={styles.homeButton}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
