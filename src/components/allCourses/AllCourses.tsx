import styles from "./AllCourses.module.css";
const AllCourses = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.allCourses}>
        Show all Web Development courses
      </button>
    </div>
  );
};

export default AllCourses;
