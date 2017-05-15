import { combineReducers } from "redux";

import { ADD_ITEM, PURCHASE_ITEM, SET_PURCHASED_FILTER, SET_CATEGORY_FILTER, SET_SORT_BY } from "./actions";

function items(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.data];

    case PURCHASE_ITEM:
    return state.map((item)=>{
      if (item.id === action.data) {
        return {
          ...item,
          purchased: true
        }
      }
      return item;
    })
    default:
      return state;
  }
}

function purchasedFilter(state = "SHOW ALL", action) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return action.data;
    default:
      return state;
  }
}

function categoryFilter(state = "SHOW ALL", action) {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.data;
    default:
      return state;
  }
}

function sortBy(state = "NAME", action) {
  switch (action.type) {
    case SET_SORT_BY:
      return action.data;
    default:
      return state;
  }
}

export const groceryApp = combineReducers({
  items,
  purchasedFilter,
  categoryFilter,
  sortBy
});
