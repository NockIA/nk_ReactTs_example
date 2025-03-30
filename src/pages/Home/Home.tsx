import { useEffect } from 'react';

import NavigationBar from '../../common/components/Navigation/Navigation';
import styles from './home.module.scss';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Nk | Home';
  }, []);

  return (
    <>
      <NavigationBar />
      <main className={styles.home}>
        <h1>Welcome to Nk</h1>
      </main>
    </>
  );
};

export default Home;
