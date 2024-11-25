import { Link } from "react-router-dom";
import styles from "./hero.module.scss";

const HeroSectionHome: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1>
        Boilerplate Code for <br />
        <span>React.TS</span>
      </h1>
      <p>With Authentification (Redux)</p>
      <div className={styles.links}>
        <Link to={"https://github.com/NockIA"} target="_blank">
          <img src="/assets/images/icons/github.webp" alt="github icon" />
          <p>Follow me on Github</p>
        </Link>
      </div>
    </section>
  );
};

export default HeroSectionHome;
