import styles from "./Banner.module.css";
import { RxCross2 } from "react-icons/rx";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContainer}>
        <p className={styles.bannerText}>
          <span className={styles.bannerBold}>It’s your last day to save</span>{" "}
          | Snap up courses from just ₹399 while you can.
        </p>
      </div>
      <span className={styles.closeBtn}>
        <RxCross2 size={20} />
      </span>
    </div>
  );
};

export default Banner;
