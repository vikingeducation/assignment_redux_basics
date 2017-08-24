import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { addItem, purchaseItem } from "./actions";

import groceryListApp from "./reducers";
import { createStore } from "redux";

const store = createStore(groceryListApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log("initial state: ", store.getState());

store.dispatch(
  addItem({
    name: "Apple",
    category: "Fruit",
    amount: 5
  })
);

setTimeout(() => {
  store.dispatch(purchaseItem(1));
}, 5000);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
