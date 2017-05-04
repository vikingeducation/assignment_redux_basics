import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { createStore } from "redux";

import { bankTransactions } from "./reducers";

import { deposit, withdraw, transfer } from "./actions";

let store = createStore(bankTransactions);

let unsubscribe = store.subscribe(() => {
  // Log the new state to the console
  console.log("new state", store.getState());
});

console.log("initial state", store.getState());

const viewAccount = (accountId) => {
	let account = store.getState().accounts.filter((account) => {
		return account.id = accountId
	})
	console.log(account);
}

store.dispatch(
  deposit({
    accountId: 2,
    amount: 27
  })
);

store.dispatch(
  withdraw({
    accountId: 1,
    amount: 500
  })
);

store.dispatch(
  deposit({
    accountId: 2,
    amount: 100
  })
);

// store.dispatch(
//   transfer({
//     from: 2,
//     to: 1,
//     amount: 5000
//   })
// );

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
