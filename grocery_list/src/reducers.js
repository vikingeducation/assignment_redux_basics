import { ADD_ITEM, PURCHASE_ITEM, SET_CATEGORY_FILTER, SET_PURCHASED_FILTER, SET_ORDER } from './actions'
import { combineReducers } from 'redux'


function groceries(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        action.data
      ]
    case PURCHASE_ITEM:
      return state.map((item) => {
        if (item.name === action.data) {
          return {
            ...item,
            purchased: true
          }
        }
      })
    default:
      return state
  }
}

function purchasedFilter(state = 'ALL', action) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return action.data
    default:
      return state
  }
}

function categoryFilter(state = 'ALL', action) {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.data
    default:
      return state
  }
}

function orderBy(state = 'name', action) {
  switch (action.type) {
    case SET_ORDER:
      return action.data
    default:
      return state
  }
}

export const groceryApp = combineReducers({
  groceries,
  purchasedFilter,
  categoryFilter,
  orderBy
})
