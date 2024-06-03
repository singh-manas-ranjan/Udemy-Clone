import styles from "./TestimonialCard.module.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Testimonial } from "../assets/TestimonialsData";

interface Props {
  testimonial: Testimonial;
}
const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.quotContainer}>
        <RiDoubleQuotesL size={25} />
      </div>
      <div className={styles.reviewContainer}>
        <p className={styles.review}>{testimonial.review}</p>
      </div>
      {testimonial.platform && (
        <div className={styles.platformContainer}>
          <div className={styles.platformImgContainer}>
            <img src={testimonial.platform} className={styles.platFormImg} />
          </div>
          <p className={styles.responses}>{testimonial.responses}</p>
        </div>
      )}
      {testimonial.profilePic && (
        <div className={styles.profileContainer}>
          <div className={styles.profile}>
            <div className={styles.profileImgContainer}>
              <img src={testimonial.profilePic} className={styles.profileImg} />
            </div>
            <div className={styles.userDetails}>
              <p className={styles.userName}> {testimonial.userName}</p>
              <p className={styles.role}>{testimonial.role}</p>
            </div>
          </div>
        </div>
      )}
      <div className={styles.linkContainer}>
        <a href="#">{testimonial.link}</a>
      </div>
    </div>
  );
};

export default TestimonialCard;
