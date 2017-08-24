import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { combineReducers, createStore } from "redux";

//action types
const ADD_ITEM = `ADD_ITEM`;
const REMOVE_ITEM = `REMOVE_ITEM`;
const PURCHASE_ITEM = `PURCHASE_ITEM`;

//actions as functions
const purchaseItem = id => {
  return {
    type: _ITEM,
    data: {
      ...data,
      data: id
    }
  };
};
const removeItem = id => {
  return {
    type: _ITEM,
    data: {
      ...data,
      data: id
    }
  };
};
const addItem = id => {
  return {
    type: _ITEM,
    data: {
      ...data,
      data: id
    }
  };
};

//reducers?
function groceryApp() {}

const groceryApp = combineReducers(
  {
    //reducers
  }
);

const store = createStore();

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
