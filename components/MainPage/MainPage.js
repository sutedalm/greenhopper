import React, { useState } from "react";
import SearchFieldForm from "../SearchFieldForm/SearchFieldForm";
import TravelCardList from "/components/travelItems/TravelCardList/TravelCardList";

const MainPage = () => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [showTravelCardList, setShowTravelCardList] = useState(false);

  const onClick = () => {
    setShowTravelCardList(true);
  };

  return (
    <div>
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
      {showTravelCardList && <TravelCardList />}
    </div>
  );
};

export default MainPage;
