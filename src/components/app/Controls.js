/** @format */

import { useState } from "react";
import DatePicker from "react-date-picker";
import { useToasts } from "react-toast-notifications";

function Controls() {
  const [date, setDate] = useState(new Date());
  const { addToast } = useToasts();

  function handleDateChange(value) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    addToast("Hello", {
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
    </div>
  );
}

export default Controls;
