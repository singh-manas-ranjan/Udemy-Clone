import Carousel from "react-multi-carousel";
import styles from "./CardCarousel.module.css";
import "react-multi-carousel/lib/styles.css";
import CardsInfo from "../../assets/CardsInfo";
import Cards from "../Cards/Cards";
const CardCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 764 },
      items: 3,
    },
    midMobile: {
      breakpoint: { max: 764, min: 520 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 520, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      className={styles.carousel}
      itemClass={styles.carouselItem}
      swipeable={true}
      draggable={true}
    >
      {CardsInfo.map((card, idx) => (
        <Cards key={idx} card={card} />
      ))}
    </Carousel>
  );
};

export default CardCarousel;
