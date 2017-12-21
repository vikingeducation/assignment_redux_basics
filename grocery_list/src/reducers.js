import { combineReducers } from "redux";

import {
  CREATE_ITEM,
  PURCHASE_ITEM,
  UPDATE_ITEM,
  SET_AVAILABILITY_FILTER
} from "./actions";

function items(state = [], action) {
  switch (action.type) {
    case CREATE_ITEM:
      return [...state, action.data];
    case PURCHASE_ITEM:
      return state.map(item => {
        if (item.id === action.data) {
          return {
            ...item,
            available: false
          };
        }
        return item;
      });
    case UPDATE_ITEM:
      return state.map(item => {
        if (item.id === action.data.id) {
          return action.data;
        }
        return item;
      });
    default:
      return state;
  }
}

function itemFilters(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_AVAILABILITY_FILTER:
      return action.data;
    default:
      return state;
  }
}

export const itemsApp = combineReducers({ items, itemFilters });
