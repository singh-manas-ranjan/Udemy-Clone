import styles from "./TestimonialsContainer.module.css";
import TestimonialCard from "./TestimonialCard";
import { Testimonial } from "../../assets/TestimonialsData";

interface Props {
  testimonials: Testimonial[];
}

const TestimonialsContainer = ({ testimonials }: Props) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.headingContainer}>
            <h1 className={styles.heading}>
              See what others are achieving through learning
            </h1>
          </div>
          <div className={styles.cardsContainer}>
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsContainer;
