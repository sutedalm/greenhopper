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

const CardItem = ({ link, type, carbon_emission }) => {
  const startDate = new Date("November 15, 2021 18:00:00");
  const endDate = new Date("November 15, 2021 22:00:00");
  const duration = msToTime(endDate - startDate);
  const price = 69;

  const toHoursMinutes = (date) => `${date.getHours()}:${date.getHours()}`;

  const photo_url = "/cardIllustrations/airport.svg";
  return (
    <a href={link} target="_blank" rel="noreferrer noopener">
      <div className={styles.CardItem__container}>
        {toHoursMinutes(startDate)} - {toHoursMinutes(endDate)}
        {"    "}
        {duration} Hours
        {"     "}
        {price}€{"     "}
        {carbon_emission} kg
      </div>
    </a>
  );
};

export default CardItem;
