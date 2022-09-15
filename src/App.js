import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import Home from "./components/Home";
import ComingSoon from "./components/ComingSoon";
const anchors = ["Home", "ComingSoon"];

const App = () => (
  <ReactFullpage
    licenseKey={"62K98-EQG1I-CI51I-J4J7H-YMSUP"}
    scrollingSpeed={1000} /* Options here */
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#f9e7c7", "#b52024"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <div className="section">
            <Home />
          </div>
          <div className="section">
            <ComingSoon />
          </div>
        </div>
      );
    }}
  />
);
export default App;
