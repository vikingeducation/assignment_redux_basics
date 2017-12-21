import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";

import { itemsApp } from "./reducers";

import {
  createItem,
  purchaseItem,
  updateItem,
  showAll,
  showAvailable,
  showNotAvailable,
  sortByName
} from "./actions.js";

let store = createStore(itemsApp);

let unsubscribe = store.subscribe(() => {
  console.log("unsubscribe", store.getState());
});

console.log("initial state", store.getState());

store.dispatch(
  createItem({
    name: "Milk",
    description: "whole milk",
    amount: 15,
    category: "Diary",
    available: true
  })
);

console.log("next state", store.getState());

store.dispatch(
  createItem({
    name: "Cookies",
    description: "lorem",
    amount: 1,
    category: "Snacks",
    available: true
  })
);

store.dispatch(purchaseItem(2));

console.log("purchased Item", store.getState());

store.dispatch(
  updateItem({
    id: 2,
    name: "Cookies",
    amount: 3,
    available: true,
    category: "Snacks",
    description: "ipsum"
  })
);

console.log("Updated Item#2", store.getState());

store.dispatch(showAll(store.getState().items));

console.log("Show All", store.getState());

store.dispatch(showAvailable(store.getState().items));

console.log("Show Available", store.getState());

store.dispatch(showNotAvailable(store.getState().items));

console.log("ShowNotAvailable", store.getState());

store.dispatch(sortByName(store.getState().items));
console.log("Sort By Name", store.getState());

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
