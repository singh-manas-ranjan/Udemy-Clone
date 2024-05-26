import styles from "./OvalButton.module.css";

const OvalButton = () => {
  return (
    <div className={styles.ovalBtnContainer}>
      <div className={styles.oval}>
        <h4 className={styles.overBtnTitle}>Web Development</h4>
        <p className={styles.ovalBtnPara} style={{ color: "white" }}>
          13.3M+ learners
        </p>
      </div>
      <div className={styles.oval}>
        <h4 className={styles.overBtnTitle}>JavaScript</h4>
        <p className={styles.ovalBtnPara}>7M+ learners</p>
      </div>
      <div className={styles.oval}>
        <h4 className={styles.overBtnTitle}>React JS</h4>
        <p className={styles.ovalBtnPara}>4M+ learners</p>
      </div>
      <div className={styles.oval}>
        <h4 className={styles.overBtnTitle}>Angular</h4>
        <p className={styles.ovalBtnPara}>14.4M+ learners</p>
      </div>
      <div className={styles.oval}>
        <h4 className={styles.overBtnTitle}>Java</h4>
        <p className={styles.ovalBtnPara}>8M+ learners</p>
      </div>
      <div className={styles.oval}>
        <h4 className={styles.overBtnTitle}>iOS Development</h4>
        <p className={styles.ovalBtnPara}>4M+ learners</p>
      </div>
      <div className={styles.oval}>
        <h4 className={styles.overBtnTitle}>CSS</h4>
        <p className={styles.ovalBtnPara}>9M+ learners</p>
      </div>
    </div>
  );
};

export default OvalButton;
