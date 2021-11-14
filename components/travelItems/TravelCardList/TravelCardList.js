import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./TravelCardList.module.css";

import CardItem from "../CardItem/CardItem";
import CardList from "../../co2Comparison/CardList/CardList";
const TravelCardList = ({co2_cards}) => {
  const cards = [
    {
      type: "flight",
      carbon_emission: "10",
      link: "https://www.google.com/",
    },
    {
      type: "train",
      carbon_emission: 10,
      link: "https://www.google.com/",
    },
    {
      type: "car",
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
        <Swiper slidesPerView={"auto"} spaceBetween={3} direction="vertical">
          {cards.map(({ type, carbon_emission, link }) => (
            <SwiperSlide key={type} className={styles.swiperSlide}>
              <CardItem
                type={type}
                carbon_emission={carbon_emission}
                link={link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TravelCardList;
