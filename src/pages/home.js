/** @format */

import FooterBlock from "../components/FooterBlock";
import MainApp from "../components/app/MainApp";
import ThemeSwitch from "../components/ThemeSwitch";
function Home() {
  return (
    <div className="container">
      <ThemeSwitch></ThemeSwitch>
      <MainApp></MainApp>
      <FooterBlock></FooterBlock>
    </div>
  );
}

export default Home;
