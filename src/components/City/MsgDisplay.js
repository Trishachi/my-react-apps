import React from "react";
import "../Accounts/Account.css";
import "./City.css";

function MsgDisplay(props) {
  return (
    <div id="messageArea">
      <h5 className="panelTitle text-center">Message Area</h5>
      <p id="resultDisplay">{props.message}</p>
    </div>
  );
}

export default MsgDisplay;
