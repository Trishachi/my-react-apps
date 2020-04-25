import React from "react";
import welcome from "./welcome.svg";
import tictactoe from "./tictactoe.svg";
import accounts from "./accounts.svg";
import cities from "./cities.svg";
import link from "./link.svg";
import stack from "./stack.svg";
import settings from "./settings.svg";
import "./svgComponent.css";

const Animation = (props) => {
  return (
    <div id="Header" className="Navigation">
      <img
        id="Home"
        src={welcome}
        className="svg-image animate"
        alt="svg1"
        onMouseOver={props.mouseOverEvent}
        onMouseLeave={props.mouseOutEvent}
        onClick={props.ButtonClicked}
      />
      <img
        id="Tictactoe"
        src={tictactoe}
        className="svg-image animate1"
        alt="svg2"
        onMouseOver={props.mouseOverEvent}
        onMouseLeave={props.mouseOutEvent}
        onClick={props.ButtonClicked}
      />
      <img
        id="Accounts"
        src={accounts}
        className="svg-image animate2"
        alt="svg3"
        onMouseOver={props.mouseOverEvent}
        onMouseLeave={props.mouseOutEvent}
        onClick={props.ButtonClicked}
      />
      <img
        id="Cities"
        src={cities}
        className="svg-image animate3"
        alt="svg4"
        onMouseOver={props.mouseOverEvent}
        onMouseLeave={props.mouseOutEvent}
        onClick={props.ButtonClicked}
      />
      <img
        id="Lists"
        src={link}
        className="svg-image animate1"
        alt="svg5"
        onMouseOver={props.mouseOverEvent}
        onMouseLeave={props.mouseOutEvent}
        onClick={props.ButtonClicked}
      />
      <img
        id="Stack"
        src={stack}
        className="svg-image animate3"
        alt="svg6"
        onMouseOver={props.mouseOverEvent}
        onMouseLeave={props.mouseOutEvent}
        onClick={props.ButtonClicked}
      />
      {/* <img
        id="Settings"
        src={settings}
        className="svg-image animate2"
        alt="svg6"
        onMouseOver={props.mouseOverEvent}
        onMouseLeave={props.mouseOutEvent}
        onClick={props.ButtonClicked}
      /> */}
    </div>
  );
};

export default Animation;
