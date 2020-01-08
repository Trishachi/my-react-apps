import React from "react";
import "./Account.css";

function AccDisplays(props) {
  return (
    <div>
      <div id="accOptions" className="hide">
        <h5 className="panelTitle text-center">Account Details</h5>

        <label className="accDetailsLabel">Highest Value Account:</label>
        <span className="accDetailsValue"> ${props.highestVAcc}</span>
        <br />
        <label className="accDetailsLabel">Lowest Value Account:</label>
        <span className="accDetailsValue"> ${props.lowestVAcc}</span>
        <br />
        <label className="accDetailsLabel">Total Balance of Accounts:</label>
        <span className="accDetailsValue"> ${props.netWorth}</span>
        <hr></hr>
      </div>
      <div id="messageArea">
        <h5 className="panelTitle text-center">Message Area</h5>
        <p id="resultDisplay"></p>
        <p id="errorDisplay" className="error">
          {props.message}
        </p>
      </div>
    </div>
  );
}

export default AccDisplays;
