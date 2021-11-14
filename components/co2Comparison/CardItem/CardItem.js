import React from "react";
import { TRANSPORTATION_ILLUSTRATIONS } from "../../../utils/constants";
import styles from "./CardItem.module.css";

const CardItem = ({ link, type, carbon_emission, distance, hours, minutes }) => {
  const photo_url = TRANSPORTATION_ILLUSTRATIONS[type];
  //const distance = 100;
  return (
    <a href={link} target="_blank" rel="noreferrer noopener">
      <div className={styles.CardItem__container}>
        <div className={styles.CardItem__header}>
          <h1 className={styles.CardItem__name}>{type}</h1>
          <p className={styles.CardItem__carbonEmission}>
            {carbon_emission}kg of CO2 with {hours}h{minutes}m travel time
          </p>
          <hr className={styles.CardItem__line} />
        </div>
        <div className={styles.CardItem__imageContainer}>
          <img src={photo_url} className={styles.CardItem__photoURL} />
        </div>
      </div>
    </a>
  );
};

export default CardItem;
