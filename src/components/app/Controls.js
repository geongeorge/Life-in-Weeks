/** @format */

import DatePicker from "react-date-picker";

function Controls({ date, setDate, age, weeks, totalYears, setTotalYears }) {
  function handleDateChange(value) {
    setDate(value);
  }
  return (
    <div className="controls">
      <label>Enter Your Birthday</label>
      <div className="datepicker__wrapper">
        <DatePicker
          className="datepicker"
          onChange={handleDateChange}
          value={date}
        />
      </div>
      <div className="yearpicker">
        <label>How many years do you estimate to live?</label>
        <div className="yearpicker__wrapper">
          <select
            value={totalYears}
            onChange={({ target }) => {
              setTotalYears(target.value);
            }}
          >
            {Array.from({ length: 121 }, (_, year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Controls;
