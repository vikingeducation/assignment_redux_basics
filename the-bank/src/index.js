import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { combineReducers, createStore } from "redux";
import { accounts, currentAccount, transactionsDateFilter } from "./reducers";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
//
// id: 3,
// balance: Math.floor(Math.random() * 10000),
// transactionsFilter: "SHOW_ALL",
// transactions: [
//   {
//     date: 2017 - 12 - 1,
//     amount: +100
//   }
// ]

let initAccountData = [
  {
    id: 1,
    name: "ZZZZZZZ",
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
    id: 2,
    name: "GEORGE",
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
    id: 3,
    name: "JULIA",
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
    id: 4,
    name: "SINBAD",
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
    data: { ...data }
  };
};
const withdrawFunds = data => {
  return {
    type: WITHDRAW_FUNDS,
    data: { ...data }
  };
};
const transferFunds = data => {
  return {
    type: TRANSFER_FUNDS,
    data: { ...data }
  };
};
const setTransactionsDateFilter = data => {
  return {
    type: SET_TRANSACTIONS_DATE_FILTER,
    data: { ...data }
  };
};
const setCurrentAccount = id => {
  return {
    type: SET_CURRENT_ACCOUNT,
    data: id
  };
};

const bankApp = combineReducers({
  accounts,
  transactionsDateFilter,
  currentAccount
});
let init = {
  accounts: initAccountData,
  transactionsDateFilter: "NEVER",
  currentAccount: "BOB"
};

const store = createStore(bankApp, init);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//SEND THE EVENT LIKE THINGS

store.dispatch(
  depositFunds({
    id: 2,
    amount: 5000
  })
);
store.dispatch(
  depositFunds({
    id: 2,
    amount: 222
  })
);
store.dispatch(
  withdrawFunds({
    id: 1,
    amount: 50
  })
);
store.dispatch(
  withdrawFunds({
    id: 1,
    amount: 7
  })
);
store.dispatch(
  transferFunds({
    senderId: 2,
    recipientId: 1,
    amount: 333
  })
);

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
