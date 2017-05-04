import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import {createStore} from "redux";
import updateBalance from "./reducers";
import {
  selectAccount,
  depositMoney,
  withdrawlMoney,
  transferMoney,
  setDateFilter
} from "./actions";

let store = createStore(updateBalance);

let unsubscribe = store.subscribe(() => {
  console.log("current state", store.getState());
});

console.log("init state", store.getState());

store.dispatch(selectAccount(1));

store.dispatch(
  depositMoney({
    amount: 55
  })
);

store.dispatch(
  withdrawlMoney({
    amount: 9
  })
);

ReactDOM.render(<App />, document.getElementById("root"));
