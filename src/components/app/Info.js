/** @format */

import { useEffect, useState } from "react";

function Info({ age, weeks, totalYears, WEEKS_IN_YEAR }) {
  const [totalWeeks, setTotalWeeks] = useState(0);
  const [livedWeeks, setLivedWeeks] = useState(0);

  useEffect(() => {
    const total = WEEKS_IN_YEAR * totalYears;
    const lived = WEEKS_IN_YEAR * age + weeks;
    setLivedWeeks(lived);
    setTotalWeeks(total);
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
    </div>
  );
}

export default Info;
