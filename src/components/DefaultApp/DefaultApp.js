import React from "react";
import logo from "./logo.svg";
// import App from "../App.js";

const DefaultApp = props => {
  return (
    <React.Fragment>
      <p id="hoverStatus">{props.myState}</p>
      <img src={logo} className="App-logo animate" alt="logo"></img>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </React.Fragment>
  );
};

export default DefaultApp;
