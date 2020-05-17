import React, { Fragment, useState } from "react";
import "../Accounts/Account.css";
import "./StackQueue.css";
import StackQueueList from "./stackFunctions.js";
import StackQueueCard from "./StackCard.js";

const StackQueueApp = () => {
  let [counter, setCounter] = useState(1);
  let [users, setUsers] = useState([]);
  let [profiles, setProfiles] = useState([]);
  let [message, setMessage] = useState("Please add a new user");

  const handleAddItem = (event) => {
    setCounter(counter + 1);
    users.push(counter);
    setUsers(users);
    console.log(users);
    updateProfiles();
  };

  const updateProfiles = () => {
    if (users.length < 1) {
      document.getElementById("stackQueueDisplay").classList.remove("unhide");
      return;
    }
    let allProfiles = users.map((user, index) => {
      return <StackQueueCard key={index} name={user} />;
    });
    setProfiles(allProfiles);
    document.getElementById("stackQueueDisplay").classList.add("unhide");
  };

  const updateUsersArray = (updatedUsers) => {
    setUsers(updatedUsers);
    updateProfiles();
  };

  const handleStack = (event) => {
    if (users.length === 0) return setMessage("Please add a new user");
    setMessage(`User ${users[users.length - 1]} has beed removed`);
    let updatedUsers = StackQueueList.lifo(users);
    console.log(users);
    updateUsersArray(updatedUsers);
  };

  const handleQueue = (event) => {
    if (users.length === 0) return setMessage("Please add a new user");
    setMessage(`User ${users[0]} has beed removed`);
    let updatedUsers = StackQueueList.fifo(users);
    console.log(users);
    updateUsersArray(updatedUsers);
  };

  return (
    <Fragment>
      <h1 className="spacer">Welcome to Stack/Queue App</h1>
      <div id="wrapper" className="container">
        <div className="row row-grid">
          <div id="leftPanel" className="col-md-12">
            <h4 className="panelTitle">Stack and Queue Control</h4>
            <hr />
            <button
              onClick={handleAddItem}
              id="add"
              type="submit"
              className="btn btn-primary"
            >
              Add Item
            </button>
            <button
              onClick={handleStack}
              id="stack"
              type="submit"
              className="btn btn-primary"
            >
              Stack/LIFO
            </button>
            <button
              onClick={handleQueue}
              id="queue"
              type="submit"
              className="btn btn-primary"
            >
              Queue/FIFO
            </button>

            <div id="messageDisplay" className="container">
              <h6>{message}</h6>
              <hr />
            </div>
            <div id="stackQueueDisplay" className="container hide">
              <h5 className="panelTitle text-center">Stack/Queue Display</h5>
              <div className="container center-item">{profiles}</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StackQueueApp;
