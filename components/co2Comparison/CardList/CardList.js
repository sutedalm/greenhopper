import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CardList.module.css";

import CardItem from "../CardItem/CardItem";
const CardList = () => {
  const cards = [
    {
      type: "Flight",
      carbon_emission: 300,
      link: "https://www.google.com/",
    },
    {
      type: "Train",
      carbon_emission: 80,
      link: "https://www.google.com/",
    },
    {
      type: "Car",
      carbon_emission: 150,
      link: "https://www.google.com/",
    },
  ];

  const emissionToColor = (emission) => {
    if (emission > 200) return "red";
    else if (emission >= 100 && emission <= 200) return "orange";
    return "green";
  };

  return (
    <div>
      <div className={styles.RecipeList__swiperContainer}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={3}
          centerInsufficientSlides
        >
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

export default CardList;
