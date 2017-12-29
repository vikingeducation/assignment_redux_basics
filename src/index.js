import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { groceryApp } from "./reducers";

import { createStore, combineReducers } from "redux";

import {
  addGrocery,
  purchaseGrocery,
  updateGrocery,
  setPurchasedFilter,
  setSortGrocery,
  filterGrocery
} from "./actions";

let store = createStore(groceryApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log("initial state", store.getState());

store.dispatch(
  addGrocery({
    name: "pizza",
    price: 9.99,
    quantity: 10,
    category: "frozen foods",
    purchased: false
  })
);

store.dispatch(
  addGrocery({
    name: "beer",
    price: 19.99,
    quantity: 20,
    category: "nectar of the gods",
    purchased: false
  })
);

store.dispatch(
  addGrocery({
    name: "chips",
    price: 3.99,
    quantity: 5,
    category: "snacks",
    purchased: false
  })
);

console.log("just added chips");

store.dispatch(purchaseGrocery(1));

console.log("just changed to purchased");

store.dispatch(
  updateGrocery({
    name: "chips",
    price: 13.99,
    quantity: 5,
    category: "snacks",
    purchased: false,
    id: 3
  })
);

console.log("just changed price");

store.dispatch(setSortGrocery({ sort: "asc", sortBy: "category" }));

store.dispatch(setPurchasedFilter("PURCHASED"));

store.dispatch(filterGrocery({ filter: "purchased" }));

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
