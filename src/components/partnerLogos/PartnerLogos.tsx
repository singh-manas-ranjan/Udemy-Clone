import styles from "./PartnerLogos.module.css";
interface Props {
  logos: string[];
}
const PartnerLogos = ({ logos }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.msg}>
        Trusted by over 15,000 companies and millions of learners around the
        world
      </div>
      <div className={styles.logoContainer}>
        {logos.map((logo, idx) => (
          <div key={idx} className={styles.logoBox}>
            <img src={logo} className={styles.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
