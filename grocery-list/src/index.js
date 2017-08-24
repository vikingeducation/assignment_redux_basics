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
    type: PURCHASE_ITEM,
    data: id
    //
    // data: {
    //   ...data,
    //   data: id
    // }
  };
};
const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    data: id
    // data: {
    //   ...data,
    //   data: id
    // }
  };
};
let itemId = 1;
const addItem = data => {
  return {
    type: ADD_ITEM,
    data: {
      ...data,
      id: itemId++
    }
  };
};

//reducers? state = {[]} ???? what is R store?
function groceryApp(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.data];
    case REMOVE_ITEM:
      return state.filter(item => action.data !== item.id);
    case PURCHASE_ITEM:
      return state.map(item => {
        if (item.id === action.data) {
          return {
            ...item,
            purchased: true
          };
        }
        return item;
      });
    default:
      return state;
  }
}

const store = createStore(groceryApp);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker(); //magicks!!!!!
