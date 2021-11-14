import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./TravelCardList.module.css";

import CardItem from "../CardItem/CardItem";
import CardList from "../../co2Comparison/CardList/CardList";
const TravelCardList = ({ from, to, startDate, endDate, co2_cards }) => {
  const cards = [
    {
      type: "Flight",
      carbon_emission: "10",
      link: "https://www.google.com/",
    },
    {
      type: "Train",
      carbon_emission: 10,
      link: "https://www.google.com/",
    },
    {
      type: "Car",
      carbon_emission: 10,
      link: "https://www.google.com/",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.fade}></div>
      <div className={styles.co2CardListContainer}>
        <CardList co2_cards={co2_cards}/>
      </div>
      <div className={styles.travelCardListContainer}>
        <h1 className={styles.travelCardListContainer__flightsHeadig}>
          FLIGHTS
        </h1>
        <hr className={styles.travelCardListContainer__headingLine} />
        <Swiper slidesPerView={"auto"} spaceBetween={3} direction="vertical">
          {cards.map(({ type, carbon_emission, link }) => (
            <SwiperSlide key={type} className={styles.swiperSlide}>
              <CardItem
                type={type}
                carbon_emission={carbon_emission}
                link={link}
                from={from}
                to={to}
                startDate={startDate}
                endDate={endDate}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TravelCardList;
