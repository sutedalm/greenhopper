import React, { useState } from "react";
import SearchFieldForm from "../SearchFieldForm/SearchFieldForm";

const MainPage = () => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

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
      />
    </div>
  );
};

export default MainPage;
