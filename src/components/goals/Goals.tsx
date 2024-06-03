import styles from "./Goals.module.css";
import { FaArrowRight } from "react-icons/fa";
interface Props {
  goalsList: GoalsObj[];
}
interface GoalsObj {
  title: string;
  desc: string;
  img: string;
  ePlan?: boolean;
}
const Goals = ({ goalsList }: Props) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.heading}>
            <h1>Learning focused on your goals</h1>
          </div>
          <div className={styles.container}>
            <div className={styles.leftContainer}>
              {goalsList.map((goal, idx) => (
                <div
                  key={idx}
                  className={[styles.goalContainer, styles.active].join(" ")}
                >
                  <div className={styles.goalImgContainer}>
                    <img src={goal.img} alt="" className={styles.img} />
                  </div>
                  <div className={styles.description}>
                    <div className={styles.titleContainer}>
                      <h3>{goal.title} </h3>
                      {goal.ePlan && (
                        <button className={styles.ePlanBtn}>
                          Enterprise Plan
                        </button>
                      )}
                    </div>
                    <p>{goal.desc}</p>
                    {goal.ePlan && (
                      <a href="#" className={styles.findMore}>
                        Find out more
                        <FaArrowRight className={styles.arrow} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.imageContainer}>
                <img
                  src="./containerization.png"
                  alt=""
                  className={styles.rightImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
