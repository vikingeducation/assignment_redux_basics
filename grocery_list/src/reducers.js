import { combineReducers } from 'redux';

import {
  CREATE_ITEM,
  PURCHASE_ITEM,
  UPDATE_ITEM,
  SHOW_ALL,
  SHOW_AVAILABLE,
  SHOW_NOT_AVAILABLE,
  SORT_BY_NAME,
  SORT_BY_DESCRIPTION
} from './actions';

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

function itemFilters(state = '', action) {
  switch (action.type) {
    case SHOW_ALL:
      return action.data;
    case SHOW_AVAILABLE:
      return action.data.filter(item => {
        return item.available;
      });
    case SHOW_NOT_AVAILABLE:
      return action.data.filter(item => {
        return !item.available;
      });
    case SORT_BY_NAME:
      return action.data.slice(0).sort(function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    case SORT_BY_DESCRIPTION:
      return action.data.slice(0).sort(function compare(a, b) {
        if (a.description < b.description) return -1;
        if (a.description > b.description) return 1;
        return 0;
      });
    default:
      return state;
  }
}

export const itemsApp = combineReducers({ items, itemFilters });
