/** @format */

import HeaderBlock from "../HeaderBlock";
import Controls from "./Controls";
import GridArea from "./GridArea";

function MainApp() {
  return (
    <div className="main-app">
      <div className="main-app__left">
        <HeaderBlock></HeaderBlock>
        <Controls></Controls>
      </div>
      <div className="main-app__right">
        <GridArea></GridArea>
      </div>
    </div>
  );
}

export default MainApp;
