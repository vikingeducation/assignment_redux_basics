import { combineReducers } from 'redux';

import {
  ADD_GROCERY,
  PURCHASE_GROCERY,
  UPDATE_GROCERY,
  SET_PURCHASED_FILTER,
  SET_SORT_GROCERY
} from './actions';

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
          return action.data;
        }
        return item;
      });
    default:
      return state;
  }
}

function groceryFilters(state = 'NOT_PURCHASED', action) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return action.data;
    default:
      return state;
  }
}

export const groceryApp = combineReducers({ groceries, groceryFilters });
