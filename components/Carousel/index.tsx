import React from "react";
import styles from "./Carousel.module.css";

interface Props {
  children: any;
}

const Carousel = ({ children }: Props) => (
  <section className={styles.carousel}>
    <div className={styles.carousel__container}>{children}</div>
  </section>
);

export default Carousel;
