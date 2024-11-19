import { SectionParagraphProps } from "../../../models/section-paragraph/section-paragraph";
import styles from "./section-paragraph.module.scss";

const SectionParagraph: React.FC<SectionParagraphProps> = ({
  title,
  content,
  iconPath,
}) => {
  return (
    <section className={styles.section}>
      <img src={`/assets/images/icons/${iconPath}`} className={styles.icon} />
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default SectionParagraph;
