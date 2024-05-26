import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.heroImg}>
        <div className={styles.heroContentContainer}>
          <h2 className={styles.mainHeading}>
            Last day to see where the deals lead
          </h2>
          <p className={styles.subHeading}>
            Save on courses from just ₹399 today. Discover new possibilities
            tomorrow.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
