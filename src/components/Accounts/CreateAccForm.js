import React, { Fragment } from "react";
import "./Account.css";
import { AccountController } from "./accountFunctions";

class CreateAccForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountController: new AccountController(),
      accName: "",
      accBalance: ""
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ accName: "", accBalance: "" });
  }

  render() {
    return (
      <Fragment>
        <h4 className="panelTitle">Account Summary</h4>
        <form>
          <div className="form-group row">
            <label htmlFor="accountName" className="col-sm-4 col-form-label">
              Account Name:
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="accountName"
                name="accName"
                placeholder="Enter Account Name"
                value={this.state.accName}
                onChange={this.handleOnChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="initBalance" className="col-sm-4 col-form-label">
              Opening Balance:
            </label>
            <div className="col-sm-8">
              <input
                type="number"
                className="form-control"
                id="initialBalance"
                name="accBalance"
                placeholder="Enter Opening Balance"
                value={this.state.accBalance}
                onChange={this.handleOnChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12">
              <button
                id="newAccount"
                type="submit"
                className="btn btn-primary"
                onClick={this.handleOnSubmit}
              >
                Create New Account
              </button>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default CreateAccForm;
