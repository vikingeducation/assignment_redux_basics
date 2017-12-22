import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";

import { accountsApp } from "./reducers";

import {
  createAccount,
  viewAccount,
  depositAccount,
  withdrawAccount,
  transferAccount
} from "./actions.js";

let store = createStore(accountsApp);

let unsubscribe = store.subscribe(() => {
  console.log("State Listener", store.getState());
});

console.log("initial state", store.getState());

store.dispatch(
  createAccount({
    name: "Edwin",
    amount: 15,
    date: Date.now(),
    transactions: []
  })
);

store.dispatch(
  createAccount({
    name: "Eddie",
    amount: 100,
    date: Date.now(),
    transactions: []
  })
);

console.log("Edwin account added", store.getState());

store.dispatch(viewAccount(store.getState().accounts[1]));

console.log("view account 1", store.getState());

store.dispatch(
  depositAccount({
    id: 1,
    amount: 1000,
    date: Date.now()
  })
);

console.log("Deposited $1000", store.getState());

store.dispatch(
  withdrawAccount({
    id: 1,
    amount: 500,
    date: Date.now()
  })
);

console.log("Withdraw $500", store.getState());

store.dispatch(
  transferAccount({
    withdrawId: 2,
    depositId: 1,
    amount: 500,
    date: Date.now()
  })
);

console.log("Transfer from Eddie to Edwin $500", store.getState());

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
