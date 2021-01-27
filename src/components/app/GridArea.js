/** @format */
import SVG from "react-inlinesvg";
import Arrow from "../../assets/arrow-right.svg";

const WEEKS_IN_YEAR = 52;

function GridArea() {
  const age = 23;
  const ageWeeks = age * WEEKS_IN_YEAR;

  function getWeekClass(week, year) {
    let className = "life-grid__el";

    const isActive = year * WEEKS_IN_YEAR + week <= ageWeeks;
    if (isActive) {
      className += " life-grid__el--active";
    }
    return className;
  }

  return (
    <div className="life-grid-wrapper">
      <div></div>
      <div class="life-grid-wrapper__weeks">
        <div>
          <span>Weeks </span>
          <div>
            <SVG src={Arrow}></SVG>
          </div>
        </div>
      </div>
      <div class="life-grid-wrapper__years">
        <div>
          <span>Years </span>
          <div>
            <SVG src={Arrow}></SVG>
          </div>
        </div>
      </div>

      <section className="life-grid">
        {Array.from({ length: 90 }, (_, year) => (
          <div className="life-grid__row" key={year}>
            {Array.from({ length: 52 }, (_, week) => (
              <span className={getWeekClass(week, year)} key={week}></span>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default GridArea;
