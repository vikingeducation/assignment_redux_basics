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
const SET_PURCHASED_FILTER = `SET_PURCHASED_FILTER`;
const SET_CATEGORY_FILTER = `SET_CATEGORY_FILTER`;
const SET_SORT_BY = `SET_SORT_BY`;

//actions as functions
const purchaseItem = id => {
  return {
    type: PURCHASE_ITEM,
    data: id
  };
};
const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    data: id
  };
};
//IIFE FTW
const addItem = (function() {
  let itemId = 1;
  return data => {
    return {
      type: ADD_ITEM,
      data: {
        ...data,
        id: itemId++
      }
    };
  };
})();
const setPurchasedFilter = filter => {
  return {
    type: SET_PURCHASED_FILTER,
    data: filter
  };
};
const setCategoryFilter = filter => {
  return {
    type: SET_CATEGORY_FILTER,
    data: filter
  };
};
const setSortBy = prop => {
  return {
    type: SET_SORT_BY,
    data: prop
  };
};

//reducers? state = {[]} ???? what is R store?
function groceries(state = [], action) {
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

function purchasedFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return action.data;
    default:
      return state;
  }
}

function categoryFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.data;
    default:
      return state;
  }
}

function sortBy(state = "Id", action) {
  switch (action.type) {
    case SET_SORT_BY:
      return action.data;
    default:
      return state;
  }
}

const groceryApp = combineReducers({
  groceries,
  purchasedFilter,
  categoryFilter,
  sortBy
});

const store = createStore(groceryApp);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  addItem({
    name: "hat",
    description: "a sweet hat",
    amount: 1,
    category: "hats",
    purchased: false
  })
);

store.dispatch(
  addItem({
    name: "shoe",
    description: "a brown shoe",
    amount: 7,
    category: "shoes",
    purchased: false
  })
);

store.dispatch(purchaseItem(2));

store.dispatch(removeItem(1));

store.dispatch(setPurchasedFilter("PURCHASED_BY_KIT"));

store.dispatch(setCategoryFilter("SQUIDS_IN_POLYETHYLENE_BAGS"));

store.dispatch(setSortBy("Name"));

store.dispatch(setSortBy("Description"));

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker(); //magicks!!!!!
