import React from "react";
import "./Account.css";
import CreateAccForm from "./CreateAccForm";
import AccDisplays from "./AccDisplays";
import { AccountController } from "./accountFunctions";
import AccountCard from "./AccountCard";

class AccountComp extends React.Component {
  constructor() {
    super();
    this.state = {
      highestAcc: 0,
      lowestAcc: 0,
      totalBalance: 0,
      errorMessage: ""
    };
    this.accountController = new AccountController();
  }

  addReactAccount = params => {
    const { accName, accBalance } = params;
    let nameArray = this.accountController.accountHolder;
    let accNames = nameArray.map(item => item.accountName);
    let nameExists = accNames.includes(accName);

    if (accName === "" || nameExists === true) {
      this.setState({
        errorMessage: "Please enter a unique name for your account"
      });
    } else {
      this.accountController.addAccount(accName, Number(accBalance));
      console.log(this.accountController.accountHolder);
      this.updateAccounts();
      this.setState({
        errorMessage: ""
      });
    }
  };

  deleteReactAccount = name => {
    this.accountController.removeAccount(name);
    console.log(this.accountController.accountHolder);
    this.updateAccounts();
  };

  updateAccounts = () => {
    if (this.accountController.accountHolder.length < 1) {
      this.setState({ highestAcc: 0, lowestAcc: 0, totalBalance: 0 });
      document.getElementById("accOptions").classList.remove("unhide");
      return;
    }
    const highestAccountUpdate = this.accountController.highestValAcc(
      this.accountController.accountHolder
    );
    const lowestAccountUpdate = this.accountController.lowestValAcc(
      this.accountController.accountHolder
    );
    const totalBalanceUpdate = this.accountController.totalAccBalance(
      this.accountController.accountHolder
    );
    this.setState({
      highestAcc: highestAccountUpdate,
      lowestAcc: lowestAccountUpdate,
      totalBalance: totalBalanceUpdate
    });
    document.getElementById("accOptions").classList.add("unhide");
  };

  addAccountCard = () => {
    return this.accountController.accountHolder.map(account => {
      return (
        <AccountCard
          key={account.accountName}
          accountCard={account}
          deleteAccCard={this.deleteReactAccount}
          updateAccCard={this.updateAccounts}
          cardName={account.accountName}
        />
      );
    });
  };

  render() {
    const card = this.addAccountCard();
    return (
      <React.Fragment>
        <h1 className="spacer">Welcome to Accounts Dashboard</h1>
        <div id="wrapper" className="container">
          <div className="row row-grid">
            <div className="col-md-6">
              <div id="leftPanel" className="col-md-12">
                <h4 className="panelTitle">Accounts</h4>
                {card}
              </div>
            </div>
            <div className="col-md-6">
              <div id="rightPanel" className="col-md-12">
                <CreateAccForm onSubmit={this.addReactAccount} />
                <hr></hr>
                <AccDisplays
                  highestVAcc={this.state.highestAcc}
                  lowestVAcc={this.state.lowestAcc}
                  netWorth={this.state.totalBalance}
                  message={this.state.errorMessage}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AccountComp;
