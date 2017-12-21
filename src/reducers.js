import { combineReducers } from "redux";

import {
  ADD_GROCERY,
  PURCHASE_GROCERY,
  UPDATE_GROCERY,
  SET_PURCHASED_FILTER,
  SET_SORT_GROCERY
} from "./actions";

const compare = (a, b) => {
  a = a.name.toLowerCase();
  b = b.name.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

function groceries(state = [], action) {
  switch (action.type) {
    case ADD_GROCERY:
      return [...state, action.data];
    case PURCHASE_GROCERY:
      return state.map(item => {
        if (item.id === action.data) {
          return {
            ...item,
            purchased: true
          };
        }
        return item;
      });
    case UPDATE_GROCERY:
      return state.map(item => {
        if (item.id === action.data.id) {
          return { ...action.data };
        }
        return item;
      });
    case SET_SORT_GROCERY:
      return state.slice(0).sort(compare);
    default:
      return state;
  }
}

function groceryFilters(state = "NOT_PURCHASED", action) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return action.data;
    default:
      return state;
  }
}

export const groceryApp = combineReducers({ groceries, groceryFilters });
