/** @format */
import { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import ReactTooltip from "react-tooltip";
import Arrow from "../../assets/arrow-right.svg";

const WEEKS_IN_YEAR = 52;
// const TOTAL_YEARS = 90;

function GridArea({ age = 0, weeks = 0, totalYears }) {
  function getAgeInWeeks() {
    return age * WEEKS_IN_YEAR + weeks;
  }

  const [ageInWeeks, setAgeInWeeks] = useState(getAgeInWeeks());

  useEffect(() => {
    setAgeInWeeks(getAgeInWeeks);
  });

  function getCurrentWeek(week, year) {
    return year * WEEKS_IN_YEAR + (week + 1);
  }

  function getWeekClass(week, year) {
    let className = "life-grid__el";

    const isActive = getCurrentWeek(week, year) <= ageInWeeks;
    if (isActive) {
      className += " life-grid__el--active";
    }
    return className;
  }

  return (
    <div>
      <div className="life-grid-wrapper">
        {/* Row 1 */}
        <div></div>
        <div></div>
        <div className="life-grid-wrapper__weeks">
          <div>
            <span>Weeks </span>
            <div>
              <SVG src={Arrow}></SVG>
            </div>
          </div>
        </div>
        {/* End Row 1 */}

        {/* Row 2 */}
        <div></div>
        <div></div>
        <div className="life-grid">
          <div className="life-grid__row">
            {Array.from({ length: WEEKS_IN_YEAR }, (_, week) => {
              const current = week + 1;
              let classes = "life-grid__el life-grid__label";
              classes +=
                current === 1 || current % 5 === 0
                  ? " life-grid__label--show"
                  : "";

              return (
                <span className={classes} key={week}>
                  {current}
                </span>
              );
            })}
          </div>
        </div>
        {/* Row 2 end */}

        {/* Row 3 */}
        <div className="life-grid-wrapper__years">
          <div>
            <span>Years </span>
            <div>
              <SVG src={Arrow}></SVG>
            </div>
          </div>
        </div>

        <div className="life-grid">
          {Array.from({ length: totalYears }, (_, year) => {
            const current = year + 1;
            let classes = "life-grid__el life-grid__label";
            classes +=
              current === 1 || current % 5 === 0
                ? " life-grid__label--show"
                : "";
            return (
              <div className="life-grid__row">
                <span className={classes} key={year} data-tip="hello world">
                  {current}
                </span>
              </div>
            );
          })}
        </div>

        <section className="life-grid">
          {Array.from({ length: totalYears }, (_, year) => (
            <div className="life-grid__row" key={year}>
              {Array.from({ length: WEEKS_IN_YEAR }, (_, week) => (
                <div
                  className={getWeekClass(week, year)}
                  key={week}
                  data-tip={`Age: ${year} years and ${week + 1} weeks`}
                ></div>
              ))}
            </div>
          ))}
        </section>
        {/* Row 3 end */}
      </div>
      <ReactTooltip />
    </div>
  );
}

export default GridArea;
