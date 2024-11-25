import { useEffect } from "react";
import Navbar from "../../components/layout/nav/nav";
import styles from "./home.module.scss";
import HeroSectionHome from "../../components/views/home/hero";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Nk | Home";
  }, []);

  return (
    <>
      <Navbar />
      <main className={styles.home}>
          <HeroSectionHome/>
      </main>
    </>
  );
};

export default Home;
