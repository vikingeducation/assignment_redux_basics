import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import {createStore} from "redux";
import {transactionsApp} from "./reducers";
import {
  depositMoney,
  withdrawlMoney,
  transferMoney,
  setDateFilter
} from "./actions";

let store = createStore(transactionsApp);

let unsubscribe = store.subscribe(() => {
  console.log("current state", store.getState());
});

console.log("init state", store.getState());

store.dispatch(
  depositMoney({
    amount: 55
  })
);

store.dispatch(
  withdrawlMoney({
    amount: 90000
  })
);

store.dispatch(
  transferMoney({
    amount: 7000,
    targetAccount: 39723674792346723
  })
);

store.dispatch(setDateFilter("1111111110:1111111112"));

ReactDOM.render(<App />, document.getElementById("root"));
