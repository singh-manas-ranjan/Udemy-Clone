import styles from "./TrendReport.module.css";
import { FiArrowRight } from "react-icons/fi";

const TrendReport = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.detailsContainer}>
            <h1 className={styles.title}>Top trends for the future of work</h1>
            <p className={styles.para}>
              GenAI and leadership are at the core of today's skills-based
              economy. Get the 2024 Global Learning & Skills Trends Report to
              learn more.
            </p>
            <button className={styles.btn}>
              Get the report <FiArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.imageContainer}>
            <img src="./trendReport.png" className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendReport;
