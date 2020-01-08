import React, { Fragment } from "react";
import cityFetchFunctions from "./cityFetch";

class CityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityCard: this.props.cityCard,
      cardInput: "",
      citySize: "",
      cardErrorMessage: ""
    };
    this.handleCardInput = this.handleCardInput.bind(this);
  }

  handleCardInput(event) {
    this.setState({ cardInput: event.target.value });
  }

  handleMovedInButton = event => {
    event.preventDefault(event);
    let movedInAmount = Number(this.state.cardInput);
    // console.log(this.state.cardInput);
    if (movedInAmount > 0) {
      this.state.cityCard.movedIn(movedInAmount);
      cityFetchFunctions.updateServer(this.state.cityCard);
      const updatedMovedInCard = this.state.cityCard;
      this.setState({
        cityCard: updatedMovedInCard,
        cardInput: "",
        cardErrorMessage: ""
      });
      this.props.updateCityCard();
      this.showCitySize();
    } else {
      this.setState({
        cardInput: "",
        cardErrorMessage: "Enter a valid Moved In Number"
      });
    }
  };

  handleMovedOutButton = event => {
    event.preventDefault(event);
    let movedOutAmount = Number(this.state.cardInput);
    if (movedOutAmount <= 0) {
      this.setState({
        cardInput: "",
        cardErrorMessage: "Enter a valid Moved Out Number"
      });
      return;
    } else if (movedOutAmount > this.state.cityCard.population) {
      this.setState({
        cardInput: "",
        cardErrorMessage: "Move Out value is larger than current population"
      });
      return;
    }
    this.state.cityCard.movedOut(movedOutAmount);
    cityFetchFunctions.updateServer(this.state.cityCard);
    const updatedMovedOutCard = this.state.cityCard;
    this.setState({
      cityCard: updatedMovedOutCard,
      cardInput: "",
      cardErrorMessage: ""
    });
    this.props.updateCityCard();
    this.showCitySize();
  };

  showCitySize = () => {
    const howBig = this.state.cityCard.howBig();
    this.setState({
      citySize: `(${howBig})`
    });
  };

  handleDeleteButton = () => {
    this.props.deleteCityCard(this.props.cardKey);
    cityFetchFunctions.deleteFromServer(this.props.cardKey);
    const updatedCard = this.state.cityCard;
    this.setState({
      cityCard: updatedCard
    });
    this.props.updateCityCard();
  };

  render() {
    let { cityName, latitude, longitude, population } = this.props.cityCard;
    return (
      <Fragment>
        <div className="card">
          <div className="card-header">{cityName}</div>
          <div className="card-body">
            <div className="spacerBottom">
              <input
                className="form-control"
                placeholder="Enter Value"
                value={this.state.cardInput}
                onChange={this.handleCardInput}
                type="number"
              />
            </div>
            <button
              className="movedIn btn btn-outline-primary"
              onClick={this.handleMovedInButton}
            >
              Moved In
            </button>
            <button
              className="movedOut btn btn-outline-primary"
              onClick={this.handleMovedOutButton}
            >
              Moved Out
            </button>
            <button
              className="deleteCardBtn btn btn-outline-danger"
              onClick={this.handleDeleteButton}
            >
              Delete
            </button>
            <div className="spacerTop">
              Latitude: {latitude} | Longitude: {longitude}
            </div>
            <div className="spacer">
              Current Population: {population} {this.state.citySize}
            </div>
            <div className="error spacerTop">{this.state.cardErrorMessage}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CityCard;
