import {combineReducers} from 'redux';
import {
  ADD_ITEM, PURCHASE_ITEM, SET_CATEGORY_FILTER,
  SET_PURCHASE_FILTER, SET_SORT
} from "./actions";


function groceryList(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        action.payload,
      ];
    case PURCHASE_ITEM:
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            purchased: true,

          };
        }
        return item;
      });

    default:
      return state
  }
}

function setCategoryFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.payload;
    default:
      return state
  }
}

function setPurchaseFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case SET_PURCHASE_FILTER:
      return action.payload;
    default:
      return state
  }
}

function setSortBy(state = 'NAME', action) {
  switch (action.type) {
    case SET_SORT:
      return action.payload;
    default:
      return state
  }
}

export const groceryListApp = combineReducers({
  groceryList,
  setCategoryFilter,
  setPurchaseFilter,
  setSortBy,
});