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

let date = new Date();

let store = createStore(bankApp);

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
let dateFrom = new Date("01/12/2017").getTime();
let dateTo = new Date().getTime();
store.dispatch(filterTransactions(dateFrom, dateTo));
//set filter again
let dateFrom2 = new Date("02/12/2017").getTime();
let dateTo2 = new Date("06/12/2017").getTime();
store.dispatch(filterTransactions(dateFrom2, dateTo2));

console.log("End State", store.getState());
unsubscribe();
