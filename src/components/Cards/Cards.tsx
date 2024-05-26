import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src="/card1.jpeg" className={styles.cardImg} />
          <div className={styles.cardDetailsContainer}>
            <p className={styles.cardHeading}>
              The Complete 2024 Web Development BootCamp.
            </p>
            <div className={styles.subDetailsContainer}>
              <h5 className={styles.postedBy}>Dr. Angel Yu</h5>
              <h5 className={styles.rating}>
                <b>4.7 </b>⭐⭐⭐⭐{" "}
                <span className={styles.enrolled}>(378,179)</span>
              </h5>
              <h4 className={styles.price}>₹3,099</h4>
              <div className={styles.bestSeller}>
                <p>Bestseller</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/card2.jpeg" className={styles.cardImg} />
          <div className={styles.cardDetailsContainer}>
            <p className={styles.cardHeading}>
              The Web Developer Bootcamp 2024
            </p>
            <div className={styles.subDetailsContainer}>
              <h5 className={styles.postedBy}>Colt Steele</h5>
              <h5 className={styles.rating}>
                <b>4.7 </b>⭐⭐⭐⭐{" "}
                <span className={styles.enrolled}>(272,362)</span>
              </h5>
              <h4 className={styles.price}>₹3,099</h4>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src="card3.jpeg" className={styles.cardImg} />
          <div className={styles.cardDetailsContainer}>
            <p className={styles.cardHeading}>
              Web Development Masterclass - Online Certification Course
            </p>
            <div className={styles.subDetailsContainer}>
              <h5 className={styles.postedBy}>YouAccel Training</h5>
              <h5 className={styles.rating}>
                <b>4.4 </b>⭐⭐⭐⭐{" "}
                <span className={styles.enrolled}>(9,795)</span>
              </h5>
              <h4 className={styles.price}>₹3,099</h4>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src="card4.jpeg" className={styles.cardImg} />
          <div className={styles.cardDetailsContainer}>
            <p className={styles.cardHeading}>
              Practical Web Development: 22 Courses in 1
            </p>
            <div className={styles.subDetailsContainer}>
              <h5 className={styles.postedBy}>Creative Online School</h5>
              <h5 className={styles.rating}>
                <b>4.3 </b>⭐⭐⭐⭐{" "}
                <span className={styles.enrolled}>(4,302)</span>
              </h5>
              <h4 className={styles.price}>₹3,299</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
