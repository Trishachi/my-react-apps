import React, { Fragment, useState } from "react";
import "../Accounts/Account.css";
import "./LinkedList.css";
import { LinkedList } from "./LinkedListFunctions.js";

let myLinkedList = new LinkedList();

const LinkedListApp = () => {
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");
  const [current, setCurrent] = useState("");
  // let currentNode = myLinkedList.current;

  const handleSubjectChange = event => {
    setSubject(event.target.value);
  };

  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  // Methods to Implement

  //Handle Insert Button
  const handleInsert = event => {
    if (subject === "" || amount === "") return null;
    myLinkedList.insert(subject, amount);
    setSubject("");
    setAmount("");
    setCurrent(myLinkedList.current);
  };

  //Handle on Enter Event
  const handleEnter = event => {
    if (event.keyCode === 13) {
      // event.preventDefault();
      handleInsert();
    }
  };

  //Handle Delete Button
  const handleDelete = () => {
    myLinkedList.delete();
    setCurrent(myLinkedList.current);
  };

  //Handle First Button
  const handleFirst = () => {
    myLinkedList.first();
    setCurrent(myLinkedList.current);
  };

  //Handle Last Button
  const handleLast = () => {
    myLinkedList.last();
    setCurrent(myLinkedList.current);
  };

  //Handle Previous Button
  const handlePrev = () => {
    myLinkedList.previous();
    setCurrent(myLinkedList.current);
  };

  //Handle Next Buttton
  const handleNext = () => {
    myLinkedList.next();
    setCurrent(myLinkedList.current);
  };

  const listNodes = [];
  let displayText = "";
  let total = 0;
  let counter = 1;
  let newNode = myLinkedList.head;
  while (newNode !== null) {
    displayText = `${newNode.subject} : ${newNode.amount}`;
    if (newNode === myLinkedList.current) {
      listNodes.push(
        <p className="currentNode" key={counter}>
          {displayText}
        </p>
      );
    } else {
      listNodes.push(
        <p className="node" key={counter}>
          {displayText}
        </p>
      );
    }
    total = total + Number(newNode.amount);
    newNode = newNode.forwardNode;
    counter = counter + 1;
  }

  return (
    <Fragment>
      <h1 className="spacer">Welcome to Linked List App</h1>
      <div id="wrapper" className="container">
        <div className="row row-grid">
          <div id="leftPanel" className="col-md-12">
            <h4 className="panelTitle">Linked List Control</h4>
            <hr />
            <div id="form">
              <div className="form-group row">
                <label htmlFor="subject" className="col-sm-4 col-form-label">
                  Subject:
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Enter Subject Name"
                    value={subject}
                    onChange={handleSubjectChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="amount" className="col-sm-4 col-form-label">
                  Amount:
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    id="amount"
                    name="amount"
                    placeholder="Enter an Amount"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4"></label>
                <div className="col-sm-8 left-align">
                  <button
                    onClick={handleInsert}
                    onKeyPress={handleEnter}
                    id="insert"
                    type="submit"
                    className="btn btn-primary"
                  >
                    Insert
                  </button>
                  <button
                    onClick={handleDelete}
                    id="delete"
                    type="submit"
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div
              id="currentNodeDisplay"
              className={myLinkedList.head ? null : "hidden"}
            >
              <h4 className="panelTitle">Linked List Display</h4>
              <p>
                {current
                  ? `Current Node: ${current.show()}`
                  : "No Current Node"}
              </p>

              <button
                id="first"
                onClick={handleFirst}
                className="btn btn-primary"
              >
                <b>{"<<"}</b>
              </button>
              <button
                id="prev"
                onClick={handlePrev}
                className="btn btn-primary"
              >
                <b>{"<"}</b>
              </button>
              <button
                id="next"
                onClick={handleNext}
                className="btn btn-primary"
              >
                <b>{">"}</b>
              </button>
              <button
                id="last"
                onClick={handleLast}
                className="btn btn-primary"
              >
                <b>{">>"}</b>
              </button>
              <div id="nodes" className="spacerTop">
                {listNodes}
              </div>
              <div id="total" className="total">
                {myLinkedList.head ? `Total Amount: ${total}` : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LinkedListApp;
