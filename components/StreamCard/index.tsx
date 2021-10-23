import React from "react";
import styles from "./StreamCard.module.css";
import MoreOptionsIcon from "@components/Icons/MoreOptionsIcon";
import * as C from "@helpers/constants";

const StreamCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.stream__image}>
        <img src="/stream-img.jpeg" />
      </div>
      <div className={styles.details}>
        <div className={styles.user__image}>
          <img src="/user-icon.png" />
        </div>
        <div className={styles.user__info}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed
            beatae, explicabo, quaerat modi officiis provident commodi expedita
            nemo pariatur, dolorum illum repellat. Illum officia quasi
            cupiditate fuga. Nihil, natus!
          </div>
          <div>Nombre</div>
          <div>Categoría</div>
        </div>
        <div className={styles.more__options}>
          <MoreOptionsIcon size={C.ICON_MEDIUM_SIZE} />
        </div>
      </div>
    </div>
  );
};

export default StreamCard;
