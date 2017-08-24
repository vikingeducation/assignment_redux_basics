import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { combineReducers, createStore } from "redux";
import { accounts, currentAccount, transactionsDateFilter } from "./reducers";
import {
  depositFunds,
  withdrawFunds,
  transferFunds,
  setTransactionsDateFilter,
  setCurrentAccount
} from "./actions";
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

const bankApp = combineReducers({
  accounts,
  transactionsDateFilter,
  currentAccount
});
let initStore = {
  accounts: initAccountData,
  transactionsDateFilter: "NEVER",
  currentAccount: "BOB"
};

const store = createStore(bankApp, initStore);
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

// unsubscribe();
ReactDOM.render(<App {...store.getState()} />, document.getElementById("root"));
registerServiceWorker();
