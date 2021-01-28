/** @format */

import { useEffect, useState } from "react";
import { useStickyState, useStickyDate } from "../../helpers/stickyState";
import HeaderBlock from "../HeaderBlock";
import Controls from "./Controls";
import GridArea from "./GridArea";
import dayjs from "dayjs";

import Info from "./Info";

const WEEKS_IN_YEAR = 52;

const TOTAL_YEARS = 90;
const DEFAULT_DATE = new Date();

function calculateAge(birthday) {
  const dob = dayjs(birthday);
  const now = dayjs();

  return now.diff(dob, "year");
}

function calculateWeeks(birthday) {
  const now = dayjs();
  const dob = dayjs(birthday).year(now.year() - 1);
  const diff = now.diff(dob, "week");

  return Math.abs(diff) % WEEKS_IN_YEAR; // +1 to adjust for zero
}

function MainApp() {
  const [date, setDate] = useStickyDate(DEFAULT_DATE, "life_date");
  const [age, setAge] = useState(calculateAge(date));
  const [weeks, setWeeks] = useState(calculateWeeks(date));
  const [totalYears, setTotalYears] = useStickyState(
    TOTAL_YEARS,
    "life_total_years"
  );

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
    totalYears,
    setTotalYears,
    WEEKS_IN_YEAR,
  };

  return (
    <div className="main-app">
      <div className="main-app__left">
        <HeaderBlock></HeaderBlock>
        <Controls {...controlProps}></Controls>
        <Info {...controlProps}></Info>
      </div>
      <div className="main-app__right">
        <GridArea {...controlProps}></GridArea>
      </div>
    </div>
  );
}

export default MainApp;
