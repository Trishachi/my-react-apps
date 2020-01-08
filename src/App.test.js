import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DefaultApp from "./components/DefaultApp/DefaultApp.js";
import Animation from "./components/Animations/svgComponent.js";
import Game from "./components/Tictactoe/tictactoe.js";
import {
  Account,
  AccountController
} from "./components/Accounts/accountFunctions.js";
import AccountComp from "./components/Accounts/Account.js";
import City from "./components/City/City.js";
import { Community } from "./components/City/cityFunctions.js";
import cityFetchFunctions from "./components/City/cityFetch.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Starter App works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DefaultApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Navigation App works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Animation />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("TicTacToe App works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Accounts App works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AccountComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Cities App works without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<City />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//**********************Accounts Exercise Tests********************/
test("Test for Account Initializations", () => {
  let newAcc = new Account("Checking", 20);
  expect(newAcc.balance()).toBe(20);
  newAcc.deposit(10);
  expect(newAcc.balance()).toBe(30);
  newAcc.deposit(-1);
  expect(newAcc.balance()).toBe(30);
  newAcc.deposit(50);
  expect(newAcc.balance()).toBe(80);
  newAcc.withdraw(50);
  expect(newAcc.balance()).toBe(30);
  newAcc.withdraw(50);
  expect(newAcc.balance()).toBe(30);
});

test("Testing Account Controller", () => {
  let newAccount = new AccountController();
  newAccount.addAccount("New", 10);
  expect(newAccount.accountList()).toEqual([
    { accountName: "New", AccBalance: 10 }
  ]);

  newAccount.addAccount("New1", 20);
  expect(newAccount.accountList()).toEqual([
    { accountName: "New", AccBalance: 10 },
    { accountName: "New1", AccBalance: 20 }
  ]);

  newAccount.removeAccount("New");
  expect(newAccount.accountList()).toEqual([
    { accountName: "New1", AccBalance: 20 }
  ]);

  newAccount.addAccount("New2", 30);
  newAccount.addAccount("New3", 15);
  expect(newAccount.getAccBalances(newAccount.accountHolder)).toEqual([
    20,
    30,
    15
  ]);

  expect(newAccount.totalAccBalance(newAccount.accountHolder)).toEqual(65);
  expect(newAccount.highestValAcc(newAccount.accountHolder)).toEqual(30);
  expect(newAccount.lowestValAcc(newAccount.accountHolder)).toEqual(15);
  expect(newAccount.accountList().length).toEqual(3);
});

//**********************Cities Exercise Tests********************/
const newCommunity = new Community();
newCommunity.createCity(1, "Lagos", 6.465422, 3.406448, 17500000);
newCommunity.createCity(2, "Calgary", 51.04427, -114.062019, 99000);
newCommunity.createCity(3, "Ottawa", 45.421532, -75.697189, 20000);
newCommunity.createCity(4, "Port Harcourt", 4.77149, 7.01435, 1000);
newCommunity.createCity(5, "Salvado", -26.93008, -49.10392, 99);
newCommunity.createCity(6, "Awka", 0, 0, 99);
//   console.log(newCommunity.cityRoster);

test("Tests for City Initializations", () => {
  //   let newCity = new City(1, "Lagos", 6.465422, 3.406448, 17500000);
  expect(newCommunity.cityRoster[0].show()).toBe(
    "Key: 1, City Name: Lagos, Latitude: 6.465422, Longitude: 3.406448, Population: 17500000"
  );
  newCommunity.cityRoster[0].movedIn(500);
  expect(newCommunity.cityRoster[0].show()).toBe(
    "Key: 1, City Name: Lagos, Latitude: 6.465422, Longitude: 3.406448, Population: 17500500"
  );
  newCommunity.cityRoster[0].movedOut(1000);
  expect(newCommunity.cityRoster[0].show()).toBe(
    "Key: 1, City Name: Lagos, Latitude: 6.465422, Longitude: 3.406448, Population: 17499500"
  );
  expect(newCommunity.cityRoster[0].howBig()).toBe("City");
  expect(newCommunity.cityRoster[1].howBig()).toBe("Large Town");
  expect(newCommunity.cityRoster[2].howBig()).toBe("Town");
  expect(newCommunity.cityRoster[3].howBig()).toBe("Village");
  expect(newCommunity.cityRoster[4].howBig()).toBe("Hamlet");
});

describe("Community Controller Methods Tests", () => {
  test("Testing whichSphere Method", () => {
    expect(newCommunity.whichSphere(newCommunity.cityRoster[0])).toBe(
      "Northern Hemishpere"
    );
    expect(newCommunity.whichSphere(newCommunity.cityRoster[4])).toBe(
      "Southern Hemishpere"
    );
    expect(newCommunity.whichSphere(newCommunity.cityRoster[5])).toBe(
      "Equator"
    );
  });

  test("Testing getMostSouthern Method", () => {
    expect(newCommunity.getMostSouthern(newCommunity.cityRoster)).toEqual({
      cityName: "Salvado",
      key: 5,
      latitude: -26.93008,
      longitude: -49.10392,
      population: 99
    });
  });

  test("Testing getMostNorthern Method", () => {
    expect(newCommunity.getMostNorthern(newCommunity.cityRoster)).toEqual({
      cityName: "Calgary",
      key: 2,
      latitude: 51.04427,
      longitude: -114.062019,
      population: 99000
    });
  });

  test("Testing getPopulation Method", () => {
    expect(newCommunity.getPopulation(newCommunity.cityRoster)).toEqual(
      17619698
    );
  });

  test("Testing deleteCity Method", () => {
    newCommunity.deleteCity(1);
    newCommunity.deleteCity(2);
    newCommunity.deleteCity(3);
    newCommunity.deleteCity(4);
    // console.log(newCommunity.cityRoster);
    expect(newCommunity.cityRoster).toEqual([
      { cityName: "Awka", key: 6, latitude: 0, longitude: 0, population: 99 },
      {
        cityName: "Salvado",
        key: 5,
        latitude: -26.93008,
        longitude: -49.10392,
        population: 99
      }
    ]);
  });
});

//city Fetch Tests
//---------------------------------------------
const url = "http://localhost:5000/";

describe("Testing Fetch Functions", () => {
  test("Tests for server fetch functions", async () => {
    let data = await cityFetchFunctions.clearServer();
    // expect(data).toEqual({});

    let newCommunity = new Community();
    newCommunity.createCity(1, "Lagos", 6.465422, 3.406448, 17500000);

    await cityFetchFunctions.postToServer(newCommunity.cityRoster[0]);
    expect(await cityFetchFunctions.getCitiesOnServer(newCommunity)).toBe(1);

    newCommunity.createCity(2, "Calgary", 51.04427, -114.062019, 99000);
    await cityFetchFunctions.postToServer(newCommunity.cityRoster[1]);
    await cityFetchFunctions.getCitiesOnServer(newCommunity);

    // console.log(await cityFetchFunctions.getCitiesOnServer());

    await cityFetchFunctions.deleteFromServer(1);
    await cityFetchFunctions.getCitiesOnServer(newCommunity);

    expect(await cityFetchFunctions.getCitiesOnServer(newCommunity)).toBe(2);
    await cityFetchFunctions.updateServer({
      key: 2,
      cityName: "Calgary",
      latitude: 51.04427,
      longitude: -114.062019,
      population: 50000
    });
    await cityFetchFunctions.getCitiesOnServer(newCommunity);
    expect(
      newCommunity.cityRoster.filter(item => item.key === 2)[0].population
    ).toBe(50000);

    await cityFetchFunctions.clearServer();
    expect(await cityFetchFunctions.getCitiesOnServer(newCommunity)).toBe(0);
  });
});
