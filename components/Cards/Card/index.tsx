import ArrowIcon from "@components/Icons/ArrowIcon";
import React from "react";
import styles from "./Card.module.css";
import * as C from "@helpers/constants";
import Link from "next/link";

interface Props {
  text: string;
  description: string;
}

const Card = ({ text, description }: Props) => {
  return (
    <Link href="#donations" scroll={true}>
      <div className={styles.card}>
        <h2>
          {text} <ArrowIcon size={C.ICON_SMALL_SIZE} type={C.ICON_RIGHT} />
        </h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Card;
