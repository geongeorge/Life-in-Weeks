/** @format */

import { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-date-picker";
import { useToasts } from "react-toast-notifications";

function Controls({ date, setDate, age, weeks, totalYears, setTotalYears }) {
  const { addToast } = useToasts();

  function handleDateChange(value) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    addToast("Set new date", {
      appearance: "info",
      autoDismiss: true,
    });

    setDate(value);
  }
  return (
    <div className="controls">
      <p>Enter Your Birthday</p>
      <div className="datepicker__wrapper">
        <DatePicker
          className="datepicker"
          onChange={handleDateChange}
          value={date}
        />
      </div>
      <div className="yearpicker">
        <p>How many years do you estimate to live?</p>
        <div className="yearpicker__wrapper">
          <select
            value={totalYears}
            onChange={({ target }) => {
              setTotalYears(target.value);
            }}
          >
            {Array.from({ length: 121 }).map((_, index) => {
              if (index < 1) return;

              return (
                <option key={index} value={index}>
                  {index}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Controls;
