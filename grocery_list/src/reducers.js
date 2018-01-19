import {combineReducers} from 'redux'
import {ADD_GROCERY_ITEM,
        PURCHASE_ITEM,
        SET_PURCHASED_FILTER,
        SET_CATEGORIES_FILTER,
        SORT_BY_TYPE } from './actions'

function groceryList(state=[], action) {
  switch (action.type) {
    case ADD_GROCERY_ITEM:
      return [
        ...state,
        action.data
      ]
    case PURCHASE_ITEM:
      return state.map( (item) => {
        if (item.id === action.data) {
          return {
            ...item,
            purchased: true
          }
        }
        return item
      })
    default:
      return state
  }
}

function groceryFilters(state='SHOW_ALL', action) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return action.data
    case SET_CATEGORIES_FILTER:
      return action.data
    default:
      return state
  }
}

function grocerySorter(state='SORT_BY_ID', action) {
  switch (action.type) {
    case SORT_BY_TYPE:
      return action.data
    default:
      return state
  }

}

export const groceryApp = combineReducers({
  groceryList,
  groceryFilters,
  grocerySorter
})
