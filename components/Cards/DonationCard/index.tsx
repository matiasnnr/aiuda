import React from "react";
import styles from "./DonationCard.module.css";

const DonationCard = ({ children }: any) => {
  return <button className={styles.container}>{children}</button>;
};

export default DonationCard;
