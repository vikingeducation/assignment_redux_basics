import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import { groceriesApp } from "./reducers";

// import actions here
import {
  addGrocery,
  updateGrocery,
  deleteGrocery,
  purchaseGrocery,
  setPurchaseFilter,
  setCategoryFilter
} from "./actions";

const store = createStore(groceriesApp);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log("initial state", store.getState());

store.dispatch(
  addGrocery({
    name: "potatoes",
    description: "Farm-fresh ground apples",
    amount: 2,
    category: "produce",
    purchased: false
  })
);

store.dispatch(
  updateGrocery(1, {
    description: "Farm-rotten ground apples"
  })
);

store.dispatch(purchaseGrocery(1));

store.dispatch(deleteGrocery(1));

store.dispatch(setCategoryFilter("SHOW_PRODUCE"));

store.dispatch(setPurchaseFilter("SHOW_PURCHASED"));

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
