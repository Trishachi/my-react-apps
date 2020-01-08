import React from "react";
import "./ThemeSettings.css";
import "../Accounts/Account.css";
import { DropdownButton, Dropdown } from "react-bootstrap";

class ThemeApp extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="spacer">Select Theme Settings</h2>
        <DropdownButton id="dropdown-basic-button" title="Select Theme">
          <Dropdown.Item href="#/action-1">Default Theme</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Light Theme</Dropdown.Item>
        </DropdownButton>
      </React.Fragment>
    );
  }
}

export default ThemeApp;
