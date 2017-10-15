import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import { groceriesApp } from "./reducers";
import { addItem } from "./actions";

let store = createStore(groceriesApp);

//logs state after each store.dispatch
let unsubscribe = store.subscribe(() => {
	console.log("Dispatches", store.getState());
});
console.log("initial state", store.getState());
//dispatch actions
//add new item to list with
//  name, description, optionas(amount, category)
store.dispatch(
	addItem({
		name: "apples",
		description: "diet",
		category: "fruit",
		amount: 5
	})
);
store.dispatch(
	addItem({
		name: "ice-cream",
		description: "vanilla",
		category: "snacks",
		amount: 1
	})
);
store.dispatch(
	addItem({
		name: "cereal",
		description: "breakfast",
		category: "grains",
		amount: 2
	})
);
//  indicate that a item has been purchased
//
//  filter purchased/ not purchased, all, categories
console.log("After Dispatches", store.getState());
//  sort by name
unsubscribe();
ReactDOM.render(<App />, document.getElementById("root"));
