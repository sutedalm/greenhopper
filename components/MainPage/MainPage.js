import React, { useState } from "react";
import SearchFieldForm from "../SearchFieldForm/SearchFieldForm";
import TravelCardList from "/components/travelItems/TravelCardList/TravelCardList";
import { api_call } from "../../utils/api-calls";

import styles from "./MainPage.module.css";

const MainPage = () => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [showTravelCardList, setShowTravelCardList] = useState(false);
  const [cards, setCards] = useState([]);

  const onClick = async () => {
    if(to == "" || from == ""){
      return;
    }
    let ret_cards = await api_call(from, to);
    setCards(ret_cards);
    setShowTravelCardList(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <SearchFieldForm
        from={from}
        to={to}
        departDate={departDate}
        returnDate={returnDate}
        setDepartDate={setDepartDate}
        setReturnDate={setReturnDate}
        setFrom={setFrom}
        setTo={setTo}
        onClick={onClick}
      />
      {showTravelCardList && (
        <TravelCardList
          to={to}
          from={from}
          startDate={departDate}
          endDate={returnDate}
          co2_cards={cards}
        />
      )}
    </div>
  );
};

export default MainPage;
