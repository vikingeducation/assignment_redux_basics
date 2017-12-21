import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";

import { accountsApp } from "./reducers";

import { createAccount, viewAccount, depositAccount } from "./actions.js";

let store = createStore(accountsApp);

let unsubscribe = store.subscribe(() => {
  console.log("State Listener", store.getState());
});

console.log("initial state", store.getState());

store.dispatch(
  createAccount({
    name: "Edwin",
    amount: 15,
    date: new Date("2017-01-26")
  })
);

store.dispatch(
  createAccount({
    name: "Eddie",
    amount: 100,
    date: new Date("2017-01-27")
  })
);

console.log("Edwin account added", store.getState());

store.dispatch(viewAccount(1));

console.log("view account 1", store.getState());

store.dispatch(
  depositAccount({
    id: 1,
    amount: 1000,
    date: new Date("2017-01-27")
  })
);

console.log("Deposited $1000", store.getState());

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
