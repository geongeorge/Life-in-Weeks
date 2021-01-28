/** @format */

import { useEffect, useState } from "react";
import HeaderBlock from "../HeaderBlock";
import Controls from "./Controls";
import GridArea from "./GridArea";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
dayjs.extend(dayOfYear);

const WEEKS_IN_YEAR = 52;

function calculateAge(birthday) {
  const dob = dayjs(birthday);
  const now = dayjs();

  return now.diff(dob, "year");
}

function calculateWeeks(birthday) {
  const now = dayjs();
  const dob = dayjs(birthday).year(now.year());

  return Math.abs(now.diff(dob, "week")); // +1 to adjust for zero
}

function MainApp() {
  const [date, setDate] = useState(new Date("1/1/2000"));
  const [age, setAge] = useState(calculateAge(date));
  const [weeks, setWeeks] = useState(calculateWeeks(date));

  useEffect(() => {
    setAge(calculateAge(date));
    setWeeks(calculateWeeks(date));
  }, [age, date, weeks]);

  const controlProps = {
    date,
    setDate,
    age,
    setAge,
    weeks,
    setWeeks,
  };

  return (
    <div className="main-app">
      <div className="main-app__left">
        <HeaderBlock></HeaderBlock>
        <Controls {...controlProps}></Controls>
      </div>
      <div className="main-app__right">
        <GridArea {...controlProps}></GridArea>
      </div>
    </div>
  );
}

export default MainApp;
