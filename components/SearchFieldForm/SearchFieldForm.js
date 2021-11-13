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
              <input
                value={from}
                placeholder="Enter a city name"
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>

            <div
              className={styles.SearchFieldForm__searchBarTextAreaContainerTo}
            >
              <label>To</label>
              <input
                value={to}
                placeholder="Enter a city name"
                onChange={(e) => setTo(e.target.value)}
              />
            </div>

            <div
              className={
                styles.SearchFieldForm__searchBarDateContainerDeparture
              }
            >
              <DatePicker
                className={
                  styles.SearchFieldForm__searchBarDateContainerDepartureDP
                }
                selected={departDate}
                placeholderText="Departure Date"
                onChange={(e) => setDepartDate(e)}
                dateFormat="dd/MM/yyyy"
              />
            </div>

            <div
              className={styles.SearchFieldForm__searchBarDateContainerArrival}
            >
              <DatePicker
                className={
                  styles.SearchFieldForm__searchBarDateContainerArrivalDP
                }
                selected={returnDate}
                placeholderText="Departure Date"
                onChange={(e) => setReturnDate(e)}
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div
              className={styles.SearchFieldForm__searchBarSearchButtonContainer}
            >
              <button className={styles.SearchFieldForm__searchBarSearchButton}>
                Search travelling options
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFieldForm;
