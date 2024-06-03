import { useState } from "react";
import styles from "./Subscription.module.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { RiArrowRightLine } from "react-icons/ri";
import { FaUser, FaUserFriends } from "react-icons/fa";

interface Plans {
  planName: string;
  for: string;
  type: string;
  price: string;
  billing?: string;
  btn: string;
  features: string[];
}

interface Props {
  plans: Plans[];
}
const Subscription = ({ plans }: Props) => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.headingContainer}>
            <h1 className={styles.heading}>
              Accelerate growth — for you or your organization
            </h1>
            <p className={styles.subHeading}>
              Reach goals faster with one of our plans or programs. Try one free
              today or contact sales to learn more.
            </p>
          </div>
          <div className={styles.cardsContainer}>
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={
                  active === idx
                    ? [styles.card, styles.active].join(" ")
                    : styles.card
                }
                onClick={() => setActive(idx)}
              >
                <div className={styles.cardTop}>
                  <div className={styles.planTypeContainer}>
                    <h2 className={styles.planName}>{plan.planName}</h2>
                    <p className={styles.for}>{plan.for}</p>
                    <p className={styles.type}>
                      {plan.type.includes("people") ? (
                        <FaUserFriends size={20} />
                      ) : (
                        <FaUser size={14} />
                      )}
                      {plan.type}
                    </p>
                  </div>
                </div>
                <div className={styles.cardBottom}>
                  <div className={styles.pricingContainer}>
                    <h4>{plan.price}</h4>
                    {plan.billing ? (
                      <p className={styles.billing}>{plan.billing}</p>
                    ) : (
                      <p className={styles.billing} />
                    )}
                  </div>
                  <button className={styles.subBtn}>
                    {plan.btn}{" "}
                    <RiArrowRightLine className={styles.arrow} size={20} />
                  </button>
                  <div className={styles.planFeaturesContainer}>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className={styles.feature}>
                        <IoIosCheckmarkCircleOutline color="#19a38c" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
