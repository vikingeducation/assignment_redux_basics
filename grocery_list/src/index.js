import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";

import { itemsApp } from "./reducers";

import { createItem } from "./actions.js";

let store = createStore(itemsApp);

console.log("initial state", store.getState());

// Dispatch our actions
store.dispatch(
  createItems({
    name: "Milk",
    description: "whole milk"
    amount: 15,
    category: "Diary",
    available: true
  })
);

// Set up the listener. The subscribe method returns a
// function to unregister the listener so set it equal
// to a variable for later use.
let unsubscribe = store.subscribe(() => {
  // Log the new state to the console
  console.log(store.getState());
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
