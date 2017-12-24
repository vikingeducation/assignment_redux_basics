import { combineReducers } from 'redux';
import {
  ADD_ITEM,
  BUY_ITEM,
  UPDATE_ITEM,
  SET_PURCHASED_FILTER,
  SET_CATEGORY_FILTER,
  SET_SORT_BY,
} from './actions';

function items(state = [], action) {
  switch (action.type) {
  case ADD_ITEM:
    return [
      ...state,
      action.data
    ];
  case BUY_ITEM:
    return state.map(item => {
      if (item.id === action.data) {
        return {
          ...item,
          purchased: true
        };
      }
      return item;
    });
  case UPDATE_ITEM:
    return state.map(item => {
      if (item.id === action.data.id) {
        return {
          ...item,
          ...action.data
        };
      }
      return item;
    });
  default:
    return state;
  }
}

function itemFilter(state = 'ALL_ITEMS', action) {
  switch (action.type) {
  case SET_PURCHASED_FILTER:
    return action.data;
  case SET_CATEGORY_FILTER:
    return action.data;
  default:
    return state;
  }
}

function sortBy(state = 'NONE', action) {
  switch (action.type) {
  case SET_SORT_BY:
    return action.data;
  default:
    return state;
  }
}

export const groceryItemsApp = combineReducers({ items, itemFilter, sortBy });
