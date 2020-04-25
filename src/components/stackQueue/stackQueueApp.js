import React, { Fragment, useState } from "react";
import "../Accounts/Account.css";

const StackQueueApp = () => {
  return (
    <Fragment>
      <h1 className="spacer">Welcome to Stack/Queue App</h1>
      <div id="wrapper" className="container">
        <div className="row row-grid">
          <div id="leftPanel" className="col-md-12">
            <h4 className="panelTitle">Stack and Queue Control</h4>
            <hr />
            <button id="add" type="submit" className="btn btn-primary">
              Add Item
            </button>
            <button id="stack" type="submit" className="btn btn-primary">
              Stack/FIFO
            </button>
            <button id="queue" type="submit" className="btn btn-primary">
              Queue/FILO
            </button>
            <hr />
            <div id="stackQueueDisplay" className="hide">
              <h5 className="panelTitle text-center">Stack/Queue Display</h5>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StackQueueApp;
