export class Account {
  constructor(accountName, AccBalance) {
    this.accountName = accountName;
    this.AccBalance = AccBalance;
  }

  deposit(depositAmount) {
    if (depositAmount <= 0) {
      return this.AccBalance;
    }
    this.AccBalance += depositAmount;
    //return this.AccBalance;
  }

  withdraw(withAmount) {
    if (withAmount > this.AccBalance) {
      return this.AccBalance;
    }
    this.AccBalance -= withAmount;
    // return this.AccBalance;
  }

  balance() {
    return this.AccBalance;
  }
}

export class AccountController {
  constructor(accOwner) {
    const _accountList = new WeakMap();
    _accountList.set(this, _accountList);
    this.accOwner = accOwner;
    this.accountHolder = [];
  }
  accountList() {
    return this.accountHolder;
  }

  addAccount(newAcc, initBalance) {
    this.accountHolder.push(new Account(newAcc, initBalance));
    // return this.accountHolder;
  }
  removeAccount(accName) {
    let newAccHolder = this.accountHolder.filter(function(value) {
      return value.accountName !== accName;
    });
    this.accountHolder = newAccHolder;
    // return this.accountHolder;
  }
  getAccBalances(arr) {
    let newArray = arr.map(num => {
      return num.AccBalance;
    });
    return newArray;
  }
  totalAccBalance(arr) {
    let newArray = this.getAccBalances(arr);
    let totalBalance = newArray.reduce((acc, curVal) => {
      return acc + curVal;
    });
    return totalBalance;
  }
  highestValAcc(arr) {
    let newArray = this.getAccBalances(arr);
    let highestVal = newArray.reduce((a, b) => {
      return Math.max(a, b);
    });
    return highestVal;
  }
  lowestValAcc(arr) {
    let newArray = this.getAccBalances(arr);
    let lowestVal = newArray.reduce((a, b) => {
      return Math.min(a, b);
    });
    return lowestVal;
  }
}
