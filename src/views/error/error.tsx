import { Link } from "react-router-dom";
import { homeLink } from "../../utils/nav-links";
import styles from "./error.module.scss";

const ErrorPage: React.FC = () => {
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
