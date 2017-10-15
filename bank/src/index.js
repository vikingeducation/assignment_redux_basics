import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import { bankApp } from "./reducers";
import { addAccount } from "./actions";

let store = createStore(bankApp);

let unsubscribe = store.subscribe(() => {
	console.log("Dispatch", store.getState());
});
console.log("Initial State", store.getState());
//add accounts
store.dispatch(
	addAccount({
		name: "Alex",
		accounts: {
			checking: 1000,
			savings: 10000
		},
		transactions: []
	})
);
// Select and account to view
// deposit into an account
// withdraw from an account
// transfer money from / to accounts
//
// Filter by transaction date

console.log("End State", store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
