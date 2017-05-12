import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { createStore } from "redux";
import { groceryApp } from "./reducers";
import {
  addItem,
  purchaseItem,
  setPurchasedFilter,
  setCategoryFilter,
  setSortBy
} from "./actions";

let store = createStore(groceryApp);

let unsubscribe = store.subscribe(() => {
  console.log("new state: ", store.getState());
});

console.log("initial state", store.getState());

store.dispatch(
  addItem({
    name: "Peanut Butter",
    description: "Tasty butter",
    amount: 3,
    category: "condiments"
  })
);
store.dispatch(
  addItem({
    name: "chocolate",
    description: "Tasty",
    amount: 10,
    category: "sweets"
  })
);

store.dispatch(purchaseItem(1));

store.dispatch(setPurchasedFilter("SHOW_PURCHASED"));

store.dispatch(setCategoryFilter("SHOW_SWEETS"));

store.dispatch(setSortBy("DESCRIPTION"));

unsubscribe();

//stay down here
ReactDOM.render(<App />, document.getElementById("root"));
