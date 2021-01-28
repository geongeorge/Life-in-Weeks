/** @format */

import { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-date-picker";
import { useToasts } from "react-toast-notifications";

function Controls({ date = new Date(), setDate, age, weeks }) {
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
    <div>
      <p>Enter Your Birthday</p>
      <div className="datepicker__wrapper">
        <DatePicker
          className="datepicker"
          onChange={handleDateChange}
          value={date}
        />
      </div>
      <div>
        {age}, {weeks}
      </div>
    </div>
  );
}

export default Controls;
