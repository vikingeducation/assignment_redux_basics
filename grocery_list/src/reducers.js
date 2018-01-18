import {combineReducers} from 'redux'
import {ADD_GROCERY_ITEM,
        SHOW_PURCHASED_FILTER,
        SHOW_UNPURCHASED_FILTER,
        SHOW_ALL_CATEGORIES_FILTER ,
        SORT_BY_NAME,
        SORT_BY_DESCRIPTION } from './actions'

function groceryList(state=[], action) {
  switch (action.type) {
    case ADD_GROCERY_ITEM:
      return [
        ...state,
        action.data
      ]
    default:
      return state
  }
}

function groceryFilters(state='SHOW_ALL', action) {
  switch (action.type) {
    case SHOW_PURCHASED_FILTER:
      return [
        ...state,
        action.data
      ]
    default:
      return state
  }
}

export const groceryApp = combineReducers({
  groceryList,
  groceryFilters
})
