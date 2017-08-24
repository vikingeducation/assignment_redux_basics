import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import { groceryApp } from "./reducers";
import {
  createGroceryItem,
  markPurchased,
  filterByPurchased,
  setSort,
  setFilter
} from "./actions";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

let store = createStore(groceryApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  createGroceryItem({
    data: {
      name: "milk",
      description: "none of that low-fat bullshit",
      purchased: false
    }
  })
);

store.dispatch(
  createGroceryItem({
    data: {
      name: "butter",
      description: "none of that low-fat bullshit",
      purchased: false
    }
  })
);

store.dispatch(markPurchased("milk"));

store.dispatch(filterByPurchased(true));

store.dispatch(filterByPurchased(false));

store.dispatch(setSort("name"));

store.dispatch(setFilter("all"));

unsubscribe();
