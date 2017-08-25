import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import { bankApp } from "./reducers";

// import actions here
import {
  addAccount,
  depositToAccount,
  withdrawFromAccount,
  transferBetweenAccounts,
  setTransactionEndFilter,
  setTransactionStartFilter,
  setTransactionTypeFilter
} from "./actions";

const store = createStore(bankApp);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log("initial state", store.getState());

store.dispatch(
  addAccount({
    owner: "bob",
    amount: 10
  })
);

store.dispatch(
  addAccount({
    owner: "mary",
    amount: 20
  })
);

store.dispatch(depositToAccount(1, 10));

store.dispatch(depositToAccount(10, 10));

store.dispatch(withdrawFromAccount(1, 15));

store.dispatch(transferBetweenAccounts(1, 2, 5));

store.dispatch(setTransactionEndFilter(Date.now()));

store.dispatch(setTransactionStartFilter(Date.now()));

store.dispatch(setTransactionTypeFilter(Date.now()));

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
