import { combineReducers } from "redux";
import {
  ADD_GROCERY_ITEM,
  UPDATE_GROCERY_ITEM,
  FILTER_BY_PURCHASED,
  SET_SORT,
  SET_FILTER
} from "./actions.js";

export function groceryItems(state = [], action) {
  const { data } = action;
  switch (action.type) {
    case ADD_GROCERY_ITEM:
      return [...state, data];
    case UPDATE_GROCERY_ITEM:
      return state.map(item => {
        if (item.data.name === data) {
          return {
            data: {
              ...item.data,
              purchased: true
            }
          };
        }
        return item;
      });

    default:
      return state;
  }
}

export function filter(
  state = {
    filteredItems: [],
    filter: "SHOW_ALL",
    sortBy: "name"
  },
  action
) {
  const { data } = action;

  switch (action.type) {
    case FILTER_BY_PURCHASED:
      let filteredItems = state.filter(item => {
        return item.data.purchased === data;
      });
      return {
        ...state,
        filteredItems
      };

    case SET_SORT:
      return {
        ...state,
        sortBy: data
      };

    case SET_FILTER:
      return {
        ...state,
        sortBy: data
      };
    default:
      return state;
  }
}

export const groceryApp = combineReducers({ groceryItems, filter });
