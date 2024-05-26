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
      <div className={styles.subNavigationContainer}>
        <div className={styles.subHeadingContainer}>
          <h4 className={styles.subHeadingLinkTitle}>Web Development</h4>
        </div>
        <div className={styles.subHeadingContainer}>
          <h4 className={styles.subHeadingLinkTitle}>IT Certifications</h4>
        </div>
        <div className={styles.subHeadingContainer}>
          <h4 className={styles.subHeadingLinkTitle}>Leadership</h4>
        </div>
        <div className={styles.subHeadingContainer}>
          <h4 className={styles.subHeadingLinkTitle}>Data Science</h4>
        </div>
        <div className={styles.subHeadingContainer}>
          <h4 className={styles.subHeadingLinkTitle}>Communication</h4>
        </div>
        <div className={styles.subHeadingContainer}>
          <h4 className={styles.subHeadingLinkTitle}>
            Business Analytics & Intelligence
          </h4>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
