import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import { groceriesApp } from "./reducers";
import { addItem, purchased, filter, sortByName } from "./actions";

let store = createStore(groceriesApp);

//logs state after each store.dispatch
let unsubscribe = store.subscribe(() => {
	console.log("Dispatches", store.getState());
});
console.log("initial state", store.getState());
//dispatch actions
//add new item to list with

store.dispatch(
	addItem({
		name: "ice-cream",
		description: "vanilla",
		category: "snacks",
		amount: 3,
		status: false
	})
);
//  name, description, optionas(amount, category)
store.dispatch(
	addItem({
		name: "cereal",
		description: "breakfast",
		category: "zgrains",
		amount: 2,
		status: false
	})
);

store.dispatch(
	addItem({
		name: "apples",
		description: "diet",
		category: "fruit",
		amount: 5,
		status: false
	})
);
//  indicate that a item has been purchased
console.log("BEFORE PURCHASE");
store.dispatch(purchased(3));

//  sort by name
console.log("BEFORE SOORTTT");
store.dispatch(sortByName());
//  filter purchased/ not purchased, all, categories
console.log("BEFORE set filter");
store.dispatch(filter("purchased"));

console.log("After Dispatches", store.getState());
unsubscribe();
ReactDOM.render(<App />, document.getElementById("root"));
