import React from "react";
import styles from "./SearchFieldForm.module.css";

const SearchFieldForm = ({
  departure,
  destination,
  from,
  to,
  setDeparture,
  setDestination,
  setFrom,
  setTo,
}) => {
  return (
    <>
      <div className={styles.SearchFieldForm__header}>Where to next?</div>
    </>
  );
};

export default SearchFieldForm;
