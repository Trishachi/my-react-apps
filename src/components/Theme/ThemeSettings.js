import React, { useContext } from "react";
import "../../App.css";
import "./ThemeSettings.css";
import { Form } from "react-bootstrap";
import { ThemeContext } from "./ThemeContext";

const ThemeApp = () => {
  const theme = useContext(ThemeContext);
  return (
    <React.Fragment>
      {/* <h2 className="spacer">Theme Settings</h2> */}
      <div className="container">
        <Form.Group>
          <Form.Label>Select Theme</Form.Label>
          <Form.Control
            as="select"
            id="form_dropdown"
            name="background"
            value={theme.background}
            onChange={theme.handleBackground}
          >
            <option value="dark">Default Theme</option>
            <option value="light">Light Theme</option>
          </Form.Control>
        </Form.Group>
      </div>
    </React.Fragment>
  );
};

export default ThemeApp;
