import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import moment from "moment";

import { createStore } from "redux";
import { bankApp } from "./reducers";
import {
	addAccount,
	selectAccount,
	transaction,
	transfer,
	filterTransactions
} from "./actions";

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
// deposit into an account
store.dispatch(transaction("deposit", 100, "checkings", 700, date));
// withdrawal from account
store.dispatch(transaction("withdrawal", 100, "checkings", 1000, date));
store.dispatch(transaction("deposit", 101, "savings", 500, date));
store.dispatch(transaction("withdrawal", 101, "checkings", 500, date));

// transfer money from / to accounts
/*	accountFrom,
	accountFromType,
	accountTo,
	accountToTyoe,
	date,
	amount
	*/
console.log("Transfer alex checking to ben savings 500");
store.dispatch(transfer(100, "checkings", 101, "savings", date, 500));
console.log("transfer ben check to alex save: 1000");
store.dispatch(transfer(101, "savings", 100, "checkings", date, 1000));
// Filter by transaction date
store.dispatch(filterTransactions());
console.log("End State", store.getState());
unsubscribe();
