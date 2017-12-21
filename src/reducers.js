import { combineReducers } from "redux";

import {
  ADD_GROCERY,
  PURCHASE_GROCERY,
  UPDATE_GROCERY,
  SET_PURCHASED_FILTER,
  SET_SORT_GROCERY
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
    default:
      return state;
  }
}

function groceryFilters(state = "NOT_PURCHASED", action) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      if (action.data.filter === "purchased") {
        console.log("groceries");
        console.log(groceries);
        return {
          groceryFilters: "PURCHASED",
          groceries: groceries.filter(obj => obj.purchased)
        };
      } else {
        return state.groceries.filter(obj => !obj.purchased);
      }
    default:
      return state;
  }
}

export const groceryApp = combineReducers({ groceries, groceryFilters });
