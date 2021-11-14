import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./TravelCardList.module.css";

import CardItem from "../CardItem/CardItem";
import CardList from "../../co2Comparison/CardList/CardList";
const TravelCardList = ({ from, to, startDate, endDate, co2_cards }) => {
  const now = new Date();
  const cards = [
    {
      type: "Flight",
      carbon_emission: 72,
      price: 44,
      link: "https://www.momondo.de/horizon/sem/flights/general?lang=de&skipapp=true&gclid=Cj0KCQiAhMOMBhDhARIsAPVml-H-H1psUuwjTiVxX7wIVqNY56fLELM69Es_CToXSLFmvjrvW_B_b6caAj_cEALw_wcB&aid=102423573545",
      startDate: new Date(now.valueOf() + 0*3600*1000),
      endDate: new Date(now.valueOf() + 2*3600*1000),
      duration: 2,
    },
    {
      type: "Train",
      carbon_emission: 89,
      price: 100,
      link: "https://www.momondo.de/horizon/sem/flights/general?lang=de&skipapp=true&gclid=Cj0KCQiAhMOMBhDhARIsAPVml-H-H1psUuwjTiVxX7wIVqNY56fLELM69Es_CToXSLFmvjrvW_B_b6caAj_cEALw_wcB&aid=102423573545",
      startDate: new Date(now.valueOf() + 0*3600*1000),
      endDate: new Date(now.valueOf() + 6*3600*1000),
      duration: 6,
    },
    {
      type: "Car",
      carbon_emission: 104,
      price: 75,
      link: "https://www.momondo.de/horizon/sem/flights/general?lang=de&skipapp=true&gclid=Cj0KCQiAhMOMBhDhARIsAPVml-H-H1psUuwjTiVxX7wIVqNY56fLELM69Es_CToXSLFmvjrvW_B_b6caAj_cEALw_wcB&aid=102423573545",
      startDate: new Date(now.valueOf() + 0*3600*1000),
      endDate: new Date(now.valueOf() + 4.5*3600*1000),
      duration: 4.5,
    },
    {
      type: "Car",
      carbon_emission: 105,
      price: 88,
      link: "https://www.momondo.de/horizon/sem/flights/general?lang=de&skipapp=true&gclid=Cj0KCQiAhMOMBhDhARIsAPVml-H-H1psUuwjTiVxX7wIVqNY56fLELM69Es_CToXSLFmvjrvW_B_b6caAj_cEALw_wcB&aid=102423573545",
      startDate: new Date(now.valueOf() + 0*3600*1000),
      endDate: new Date(now.valueOf() + 1*3600*1000),
      duration: 1,
    },
    {
      type: "Car",
      carbon_emission: 124,
      price: 99,
      link: "https://www.momondo.de/horizon/sem/flights/general?lang=de&skipapp=true&gclid=Cj0KCQiAhMOMBhDhARIsAPVml-H-H1psUuwjTiVxX7wIVqNY56fLELM69Es_CToXSLFmvjrvW_B_b6caAj_cEALw_wcB&aid=102423573545",
      startDate: new Date(now.valueOf() + 0*3600*1000),
      endDate: new Date(now.valueOf() + 1*3600*1000),
      duration: 1,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.fade}></div>
      <div className={styles.co2CardListContainer}>
        <CardList co2_cards={co2_cards} />
      </div>
      <div className={styles.travelCardListContainer}>
        <h1 className={styles.travelCardListContainer__flightsHeadig}>
          FLIGHTS
        </h1>
        <hr className={styles.travelCardListContainer__headingLine} />
        <Swiper slidesPerView={"auto"} spaceBetween={3} direction="vertical">
          {cards.map(
            ({
              type,
              carbon_emission,
              link,
              price,
              startDate,
              endDate,
              duration,
            }) => (
              <SwiperSlide key={type} className={styles.swiperSlide}>
                <CardItem
                  type={type}
                  carbon_emission={carbon_emission}
                  link={link}
                  from={from}
                  to={to}
                  startDate={startDate}
                  endDate={endDate}
                  price={price}
                  duration={duration}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default TravelCardList;
