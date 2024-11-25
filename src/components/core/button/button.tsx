import styles from "./button.module.scss";

const Button: React.FC = () => {
  return (
    <>
      <button className={styles.button}>Ceci est un bouton</button>
    </>
  );
};

export default Button;
