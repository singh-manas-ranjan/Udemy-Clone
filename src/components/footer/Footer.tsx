import styles from "./Footer.module.css";
import { IoIosGlobe } from "react-icons/io";
import { MdOutlineCopyright } from "react-icons/md";
interface LogoType {
  logo: string;
  logos: string[];
  listOne: string[];
  listTwo: string[];
  listThree: string[];
  year: string;
}
interface Props {
  footerData: LogoType;
}

const Footer = ({ footerData }: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.headingContainer}>
          <h3 className={styles.heading}>
            Top companies choose{" "}
            <span className={styles.colorText}>Udemy Business</span> to build
            in-demand career skills.
          </h3>
        </div>
        <div className={styles.logoContainer}>
          {footerData.logos.map((img, idx) => (
            <img key={idx} src={`./${img}`} />
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.leftContainer}>
          <div className={styles.firstList}>
            <ul className={styles.items}>
              {footerData.listOne.map((item, idx) => (
                <li key={idx} className={styles.item}>
                  <a href="#" className={styles.link}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.secondList}>
            <ul className={styles.items}>
              {footerData.listTwo.map((item, idx) => (
                <li key={idx} className={styles.item}>
                  <a href="#" className={styles.link}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.thirdList}>
            <ul className={styles.items}>
              {footerData.listThree.map((item, idx) => (
                <li key={idx} className={styles.item}>
                  <a href="#" className={styles.link}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className={styles.btn}>
          <IoIosGlobe size={20} />
          English
        </button>
      </div>

      <div className={styles.end}>
        <div className={styles.comLogoContainer}>
          <img src={footerData.logo} className={styles.companyLogo} />
        </div>
        <p className={styles.copy}>
          <MdOutlineCopyright />
          {footerData.year}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
