import { combineReducers } from "redux";

import {
  ADD_GROCERY,
  PURCHASE_GROCERY,
  UPDATE_GROCERY,
  SET_PURCHASED_FILTER,
  SET_SORT_GROCERY,
  FILTER_GROCERY
} from "./actions";

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
      const x = key => (a, b) => {
        a = a[key].toLowerCase();
        b = b[key].toLowerCase();
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      };

      return action.data.sort === "asc"
        ? state.slice(0).sort(x(action.data.sortBy))
        : action.data.sort === "desc"
          ? state
              .slice(0)
              .sort(x(action.data.sortBy))
              .reverse()
          : state;
    case FILTER_GROCERY:
      return action.data.filter === "purchased"
        ? state.filter(obj => obj.purchased)
        : action.data.filter === "not purchased"
          ? state.state.filter(obj => !obj.purchased)
          : state;
    default:
      return state;
  }
}

function groceryFilters(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return action.data;
    default:
      return state;
  }
}

export const groceryApp = combineReducers({ groceries, groceryFilters });
