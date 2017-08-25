import { combineReducers } from "redux";
// import actions here
import {
  PURCHASE_GROCERY,
  ADD_GROCERY,
  ADD_GROCERIES,
  DELETE_GROCERY,
  UPDATE_GROCERY,
  SET_PURCHASE_FILTER,
  SET_CATEGORY_FILTER
} from "./actions";

// // schemas
// const groceryListSchema = [
//   {
//     id: 1,
//     name: "potatoes",
//     description: "Farm-fresh ground apples",
//     amount: 2,
//     category: "produce",
//     purchased: true
//   }
// ];

// const purchasedFilterSchema = "SHOW_ALL"; // SHOW_{PUCHASED, NOT_PURCHASED, ALL}

// const categoryFilterSchema = "SHOW_ALL"; // SHOW_{CATEGORY_[name], ALL}

// reducers
function groceries(state = [], action) {
  switch (action.type) {
    case PURCHASE_GROCERY:
      return state.map(
        grocery =>
          grocery.id === action.data ? { ...grocery, purchased: true } : grocery
      );

    case ADD_GROCERY:
      return [...state, action.data];

    case ADD_GROCERIES:
      return [...state, ...action.data];

    case UPDATE_GROCERY:
      return state.map(
        grocery =>
          grocery.id === action.data.id
            ? { ...grocery, ...action.data }
            : grocery
      );

    case DELETE_GROCERY:
      return state.filter(grocery => grocery.id !== action.data);

    default:
      return state;
  }
}

function purchaseFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_PURCHASE_FILTER:
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

export const groceriesApp = combineReducers({
  groceries,
  purchaseFilter,
  categoryFilter
});
