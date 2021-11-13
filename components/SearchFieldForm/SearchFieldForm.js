import React from "react";
import DatePicker from "react-datepicker";

import styles from "./SearchFieldForm.module.css";
import "react-datepicker/dist/react-datepicker.css";

const SearchFieldForm = ({
  from,
  to,
  departDate,
  returnDate,
  setDepartDate,
  setReturnDate,
  setFrom,
  setTo,
}) => {
  return (
    <>
      <div className={styles.SearchFieldForm__container}>
        <div className={styles.SearchFieldForm__header}>Where to next?</div>

        <div className={styles.SearchFieldForm__searchBar}>
          <div className={styles.SearchFieldForm__searchBarContainer}>
            <div
              className={styles.SearchFieldForm__searchBarTextAreaContainerFrom}
            >
              <label>From</label>
              <textarea placeholder="Enter a city name"></textarea>
            </div>

            <div
              className={styles.SearchFieldForm__searchBarTextAreaContainerTo}
            >
              <label>To</label>
              <textarea placeholder="Enter a city name"></textarea>
            </div>

            <div
              className={
                styles.SearchFieldForm__searchBarDateContainerDeparture
              }
            >
              <DatePicker
                selected={departDate}
                placeholderText="Departure Date"
                //   onChange={(departDate) => setDepartDate(departDate)}
                dateFormat="dd/MM/yyyy"
              />
            </div>

            <div
              className={styles.SearchFieldForm__searchBarDateContainerArrival}
            >
              <DatePicker
                selected={departDate}
                placeholderText="Departure Date"
                //   onChange={(departDate) => setDepartDate(departDate)}
                dateFormat="dd/MM/yyyy"
              />
            </div>

            <div className={styles.SearchFieldForm__searchBarSearchButton}>
              <button>Search travelling options</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFieldForm;
