import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { createStore } from "redux";
import { groceriesApp } from "./reducers";
import {
  addItem,
  purchaseItem,
  setPurchasedFilter,
  setCategoriesFilter
} from "./actions";

let store = createStore(groceriesApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log("init state", store.getState());

store.dispatch(
  addItem({
    name: "Peanut Butter",
    description: "Tasty butter",
    amount: 3,
    category: "condiments",
    purchased: false
  })
);

store.dispatch(purchaseItem(1));

store.dispatch(setPurchasedFilter("SHOW_PURCHASED"));

store.dispatch(setCategoriesFilter("SHOW_CONDIMENTS"));

//stay down here
ReactDOM.render(<App />, document.getElementById("root"));
