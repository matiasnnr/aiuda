import ArrowIcon from "@components/Icons/ArrowIcon";
import React from "react";
import styles from "./Card.module.css";
import * as C from "@helpers/constants";

interface Props {
  text: string;
  description: string;
}

const Card = ({ text, description }: Props) => {
  return (
    <a href="https://nextjs.org/docs" className={styles.card}>
      <h2>{text} <ArrowIcon size={C.ICON_SMALL_SIZE} type={C.ICON_RIGHT}/></h2>
      <p>{description}</p>
    </a>
  );
};

export default Card;
