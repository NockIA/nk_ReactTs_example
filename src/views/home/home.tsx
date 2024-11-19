import { useEffect } from "react";
import Navbar from "../../components/shared/nav/nav";
import SectionParagraph from "../../components/views/home/section-paragraph";
import { homeParagraphs } from "../../utils/home-content";
import styles from "./home.module.scss";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <Navbar />
      <main className={styles.home}>
        {homeParagraphs.map((paragraph, index) => (
          <SectionParagraph
            key={index}
            title={paragraph.title}
            content={paragraph.content}
            iconPath={paragraph.iconPath}
          />
        ))}
      </main>
    </>
  );
};

export default Home;
