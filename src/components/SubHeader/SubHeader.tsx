import styles from "./SubHeader.module.css";

const SubHeader = () => {
  return (
    <>
      <div className={styles.headingContainer}>
        <h1>All the skills you need in one place</h1>
        <p className={styles.subHeaderPara}>
          From critical skills to technical topics, Udemy supports your
          professional development.
        </p>
      </div>
      <div className={styles.ovalBtnContainer}>
        <div className={styles.oval}>
          <h4 className={styles.overBtnTitle}>Web Development</h4>
        </div>
        <div className={styles.oval}>
          <h4 className={styles.overBtnTitle}>IT Certifications</h4>
        </div>
        <div className={styles.oval}>
          <h4 className={styles.overBtnTitle}>Leadership</h4>
        </div>
        <div className={styles.oval}>
          <h4 className={styles.overBtnTitle}>Data Science</h4>
        </div>
        <div className={styles.oval}>
          <h4 className={styles.overBtnTitle}>Communication</h4>
        </div>
        <div className={styles.oval}>
          <h4 className={styles.overBtnTitle}>
            Business Analytics & Intelligence
          </h4>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
