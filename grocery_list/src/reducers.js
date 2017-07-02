import {combineReducers} from 'redux';
import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  SET_PURCHASED_FILTER,
  SET_CATEGORY_FILTER,
  SET_SORT_FILTER
} from './actions';

function groceryList(state = [], action) {
  switch(action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        action.data
      ];
    case UPDATE_PRODUCT: 
      return state.map(product => {
        if (product.id === action.data.id) {
          return action.data;
        }

        return product;
      });
    default:
      return state;
  }
}

let defaultFilters = {
  purchased: "SHOW_ALL",
  category: "SHOW_ALL",
  sort: "SORT_BY_NAME"
};

function productFilters(state = defaultFilters, action) {
  switch(action.type) {
    case SET_PURCHASED_FILTER:
      return {
        ...state,
        purchased: action.data
      };
    case SET_CATEGORY_FILTER:
      return {
        ...state,
        category: action.data
      };
    case SET_SORT_FILTER:
      return {
        ...state,
        sort: action.data
      };
    default:
      return state;
  }
}

export const groceryListApp = combineReducers({
  groceryList,
  productFilters
});