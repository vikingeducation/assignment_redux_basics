import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { groceriesApp } from "./reducers";
import // import groceries actions
"./actions";



let store = createStore(groceriesApp);

//logs state after each store.dispatch
let unsubscribe = store.subscribe(( => {
  console.log(store.getState());
}))


//dispatch actions
//add new item to list with
//  name, description, optionas(amount, category)
//
//  indicate that a item has been purchased
//
//  filter purchased/ not purchased, all, categories
//
//  sort by name
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
