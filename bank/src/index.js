import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import moment from "moment";

import { createStore } from "redux";
import { bankApp } from "./reducers";
import { addAccount, selectAccount, deposit } from "./actions";

let date = moment().format("MMM Do YY h:mm");

let store = createStore(bankApp);
console.log(date);

let unsubscribe = store.subscribe(() => {
	console.log("Dispatch", store.getState());
});
console.log("Initial State", store.getState());
//add accounts
store.dispatch(
	addAccount({
		name: "Alex",
		checkings: 1000,
		savings: 10000,
		transactions: []
	})
);

store.dispatch(
	addAccount({
		name: "Ben",
		checkings: 2000,
		savings: 10000,
		transactions: []
	})
);
// Select and account to view

store.dispatch(selectAccount(100));
console.log("before deposit");
// deposit into an account
store.dispatch(deposit(100, "checkings", 500, date));
console.log("TWO");
store.dispatch(deposit(100, "checkings", 500, date));
console.log("THREE");
store.dispatch(deposit(101, "savings", 500, date));
console.log("FOUR");
store.dispatch(deposit(101, "checkings", 1000, date));
// withdraw from an account
// transfer money from / to accounts
//
// Filter by transaction date

console.log("End State", store.getState());
unsubscribe();
ReactDOM.render(<App />, document.getElementById("root"));
