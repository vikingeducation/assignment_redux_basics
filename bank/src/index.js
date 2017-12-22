import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { accountApp } from "./reducers";
import { createStore, combineReducers } from "redux";

import {
  addAccount,
  updateAccount,
  filterTransactions,
  depositFunds,
  withdrawFunds,
  transferFunds
} from "./actions";

let store = createStore(accountApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log("initial state", store.getState());

store.dispatch(
  addAccount({
    name: "Scrooge McDuck",
    balance: 100000,
    transactions: []
  })
);

store.dispatch(
  addAccount({
    name: "Bob Zuruncle",
    balance: 1000000,
    transactions: []
  })
);

store.dispatch(
  depositFunds({
    deposit: 100,
    id: 1
  })
);

store.dispatch(
  withdrawFunds({
    deposit: 500,
    id: 1
  })
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
