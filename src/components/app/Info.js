/** @format */

import { useEffect, useState } from "react";

function Info({ age, weeks, totalYears, WEEKS_IN_YEAR }) {
  const [totalWeeks, setTotalWeeks] = useState(0);
  const [livedWeeks, setLivedWeeks] = useState(0);
  const [remainingWeeks, setRemainingWeeks] = useState(0);

  useEffect(() => {
    const total = WEEKS_IN_YEAR * totalYears;
    const lived = WEEKS_IN_YEAR * age + weeks;
    setLivedWeeks(lived);
    setTotalWeeks(total);
    setRemainingWeeks(total - lived);
  }, [weeks, age, totalYears]);

  return (
    <div className="extra__info">
      <h1>About you</h1>
      <div>
        You are <span>{age}</span> years and <span>{weeks}</span> weeks old.
      </div>
      <div>
        You have lived <span>{livedWeeks}</span> weeks out of the{" "}
        <span>{totalWeeks}</span> you have.
      </div>
      <div>
        And in case you didn't knew, you are not getting the{" "}
        <span>{livedWeeks}</span> back. So spend the remaining{" "}
        <span>{remainingWeeks}</span> weeks you have wisely.
      </div>
      <div>
        Inspired by{" "}
        <a
          href="https://waitbutwhy.com/2014/05/life-weeks.html"
          target="_blank"
        >
          Wait but why
        </a>
      </div>
    </div>
  );
}

export default Info;
