import { TRANSPORTATION_TYPES } from "./constants";

// Makes api call to get recipe and shop list
export async function api_call(from, to) {
  cards = [
    {
      type: TRANSPORTATION_TYPES.FLIGHT,
      carbon_emission: 10,
      link: "https://www.google.com/",
    },
    {
      type: TRANSPORTATION_TYPES.TRAIN,
      carbon_emission: 10,
      link: "https://www.google.com/",
    },
    {
      type: TRANSPORTATION_TYPES.BUS,
      carbon_emission: 10,
      link: "https://www.google.com/",
    },
    {
      type: TRANSPORTATION_TYPES.CAR,
      carbon_emission: 10,
      link: "https://www.google.com/",
    },
  ];
  return cards;
}
