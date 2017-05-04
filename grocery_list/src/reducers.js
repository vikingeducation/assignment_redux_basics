import {
  ADD_ITEM,
  PURCHASE_ITEM,
  SET_PURCHASED_FILTER,
  SET_CATEGORIES_FILTER,
  SORT_ITEMS
} from "./actions";
import { combineReducers } from "redux";

function groceriesList(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.data];
    case PURCHASE_ITEM:
      return state.map(item => {
        if (item.id === action.data) {
          return {
            ...item,
            purchased: true
          };
        }
      });
    default:
      return state;
  }
}

function groceryPurchaseFilters(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return action.data;

    default:
      return state;
  }
}

function groceryCategoriesFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_CATEGORIES_FILTER:
      return action.data;
    default:
      return state;
  }
}

export const groceriesApp = combineReducers({
  groceriesList,
  groceryPurchaseFilters,
  groceryCategoriesFilter
});
