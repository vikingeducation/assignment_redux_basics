import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// Import the createStore method from Redux
import { createStore } from "redux";

import { groceryApp } from "./reducers";

import { addItem } from "./actions";

let store = createStore(groceryApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Before we start, take a look at the state
console.log("initial state", store.getState());

store.dispatch(
  addItem({
    name: "cheese",
    description: "beautiful parmesan",
    amount: 10,
    category: "dairey"
  })
);

unsubscribe();
////////////////////////////////
//React Dom
///////////////////////////////
ReactDOM.render(<App />, document.getElementById("root"));
