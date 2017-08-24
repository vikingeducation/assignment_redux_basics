import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { combineReducers, createStore } from "redux";
import { reducers } from "./reducers";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

let accounts = [
  {
    id: 0,
    balance: 100,
    transactionsFilter: "SHOW_ALL",
    transactions: [
      {
        date: 2017 - 12 - 1,
        amount: +100
      }
    ]
  },
  {
    id: 0,
    balance: 100,
    transactionsFilter: "SHOW_ALL",
    transactions: [
      {
        date: 2017 - 12 - 1,
        amount: +100
      }
    ]
  }
];

/*
Select an account to view.
Deposit funds into an account.
Withdraw funds from an account.
Transfer funds between accounts.
Filter transactions by date (using a start and end date) for an account.
*/

//action constants
export const DEPOSIT_FUNDS = `DEPOSIT_FUNDS`;
export const WITHDRAW_FUNDS = `WITHDRAW_FUNDS`;
export const TRANSFER_FUNDS = `TRANSFER_FUNDS`;
export const SET_TRANSACTIONS_DATE_FILTER = `SET_TRANSACTIONS_DATE_FILTER`;
export const SET_CURRENT_ACCOUNT = `SET_CURRENT_ACCOUNT`;

//action creators

const depositFunds = data => {
  return {
    type: DEPOSIT_FUNDS,
    ...data
  };
};
const withdrawFunds = data => {
  return {
    type: WITHDRAW_FUNDS,
    ...data
  };
};
const transferFunds = data => {
  return {
    type: TRANSFER_FUNDS,
    ...data
  };
};
const setTransactionsDateFilter = data => {
  return {
    type: SET_TRANSACTIONS_DATE_FILTER,
    ...data
  };
};
const setCurrentAccount = id => {
  return {
    type: SET_CURRENT_ACCOUNT,
    data: id
  };
};

const bankApp = combineReducers({
  funds,
  transactionsDateFilter,
  currentAccount
});

const store = createStore(bankApp);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//do the things

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
