import React from "react";
import { TRANSPORTATION_ILLUSTRATIONS } from "../../../utils/constants";
import styles from "./CardItem.module.css";

const CardItem = ({ link, type, carbon_emission }) => {
  const photo_url = TRANSPORTATION_ILLUSTRATIONS[type];
  const distance = 100;
  return (
    <a href={link} target="_blank" rel="noreferrer noopener">
      <div className={styles.CardItem__container}>
        <div className={styles.CardItem__header}>
          <h1 className={styles.CardItem__name}>{type}</h1>
        </div>
        <div className={styles.CardItem__imageContainer}>
          <img src={photo_url} className={styles.CardItem__photoURL} />
        </div>
        <p className={styles.CardItem__carbonEmission}>
          The caron emission for {distance} km would be {carbon_emission}kg
        </p>
      </div>
    </a>
  );
};

export default CardItem;
