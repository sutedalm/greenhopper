import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CardList.module.css";

import CardItem from "../CardItem/CardItem";
const CardList = () => {
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
