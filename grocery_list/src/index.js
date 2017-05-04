import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import {createStore} from "redux";
import groceriesList from "./reducers";
import {addItem} from "./actions";

let store = createStore(groceriesList);

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

//stay down here
ReactDOM.render(<App />, document.getElementById("root"));
