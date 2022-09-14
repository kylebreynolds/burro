import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Burro from "./components/Burro";
import ComingSoon from "./components/ComingSoon";
const anchors = ["Home", "Burro", "ComingSoon", "Contact"];

const App = () => (
  <ReactFullpage
    licenseKey={"62K98-EQG1I-CI51I-J4J7H-YMSUP"}
    scrollingSpeed={1000} /* Options here */
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#f9e7c7", "#b52024", "#f4a51d", "#3c2415"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <div className="section">
            <h3>Burro</h3>
            <Home/>
          </div>
          <div className="section">
            <h4>Portfolio</h4>
            <Burro/>
          </div>
          <div className="section">
            <h4>Resume</h4>
            <ComingSoon/>
            
          </div>  
          <div className="section">
            <h4>Contact</h4>
            <Contact/>
          </div>
        </div>
      );
    }}
  />
);
export default App;
