import styles from "./Cards.module.css";
import { CardObj } from "../../assets/CardsInfo";

interface Props {
  card: CardObj;
}
const Cards = ({ card }: Props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img src={`./${card.img}`} className={styles.img} />
        </div>
        <div className={styles.cardDetailsContainer}>
          <h4>{card.title}</h4>
          <h5 className={styles.authorName}>
            {card.author.length >= 34
              ? `${card.author.substring(0, 37).substring(0, 37)}...`
              : card.author}
          </h5>
          <p className={styles.rating}>
            <b>{card.rating}</b> ⭐⭐⭐⭐{" "}
            <span className={styles.totalRatings}>{card.totalRatings}</span>
          </p>
          <p className={styles.price}>
            <b>{card.price}</b>
          </p>
          {card.bestSeller && (
            <div className={styles.bestSeller}>Bestseller</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
