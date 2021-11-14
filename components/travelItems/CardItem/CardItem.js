import React from "react";
import styles from "./CardItem.module.css";

function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes;
}

const CardItem = ({
  link,
  type,
  carbon_emission,
  from,
  to,
  startDate,
  endDate,
  price,
  duration,
}) => {
  const toHoursMinutes = (date) => `${date.getHours()}:${date.getHours()}`;

  const photo_url = "/cardIllustrations/airport.svg";
  return (
    <a href={link} target="_blank" rel="noreferrer noopener">
      <div className={styles.CardItem__container}>
        <div className={styles.CardItem__containerRight}>
          <h4 className={styles.CardItem__containerEmission}>
            {carbon_emission}kg of CO2/{duration} hours
          </h4>
        </div>

        <div className={styles.CardItem__textContainer}>
          <div className={styles.CardItem__text}>
            <img src="/clock.png" alt="Time:" width="15" height="15" />
            {toHoursMinutes(startDate)} - {toHoursMinutes(endDate)}
          </div>
          <div className={styles.CardItem__text}>
            <img src="/time-left.png" alt="Time:" width="15" height="15" />{" "}
            {duration}h
          </div>
          <div className={styles.CardItem__text}>{price}€</div>
        </div>
      </div>
    </a>
  );
};

export default CardItem;
