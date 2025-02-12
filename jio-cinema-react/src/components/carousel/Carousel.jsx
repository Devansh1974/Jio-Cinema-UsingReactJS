import { useState } from "react";
import styles from "./Carousel.module.css";

const images = [
  "/src/assets/carousel.png",
  "/src/assets/carousel1.png",
  "/src/assets/carousel2.png",
  "/src/assets/carousel3.png",
  "/src/assets/carousel4.png",
  "/src/assets/carousel5.png"

];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles.carousel}>
      <button onClick={prevSlide} className={styles.prev}>
        ❮
      </button>
      <img src={images[currentIndex]} alt="Carousel" className={styles.image} />
      <button onClick={nextSlide} className={styles.next}>
        ❯
      </button>
    </section>
  );
};

export default Carousel;
