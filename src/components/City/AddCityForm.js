import React, { Fragment } from "react";
import "../Accounts/Account.css";
import "./City.css";

class AddCityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: " ",
      latitude: "",
      longitude: "",
      population: ""
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({
      cityName: "",
      latitude: "",
      longitude: "",
      population: ""
    });
  }

  render() {
    return (
      <Fragment>
        <h5 className="panelTitle">Build Community</h5>
        <div className="form-group row">
          <label htmlFor="cityName" className="col-sm-4 col-form-label">
            City Name:
          </label>
          <div className="col-sm-8">
            <input
              onChange={this.handleFormChange}
              type="text"
              className="form-control"
              id="cityName"
              placeholder="Enter New City Name"
              name="cityName"
              value={this.state.cityName}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="latitudeInput" className="col-sm-4 col-form-label">
            Latitude:
          </label>
          <div className="col-sm-8">
            <input
              onChange={this.handleFormChange}
              type="number"
              className="form-control"
              id="latitudeInput"
              placeholder="Enter Latitude"
              name="latitude"
              value={this.state.latitude}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="longitudeInput" className="col-sm-4 col-form-label">
            Longitude:
          </label>
          <div className="col-sm-8">
            <input
              onChange={this.handleFormChange}
              type="number"
              className="form-control"
              id="longitudeInput"
              placeholder="Enter Longitude"
              name="longitude"
              value={this.state.longitude}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="population" className="col-sm-4 col-form-label">
            Population:
          </label>
          <div className="col-sm-8">
            <input
              onChange={this.handleFormChange}
              type="number"
              className="form-control"
              id="population"
              placeholder="Enter Population"
              name="population"
              value={this.state.population}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <button
              id="addNewCity"
              type="submit"
              className="btn btn-primary"
              onClick={this.handleFormSubmit}
            >
              Add New City
            </button>
          </div>
        </div>
        <hr></hr>
      </Fragment>
    );
  }
}

export default AddCityForm;
