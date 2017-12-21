import { CREATE_ITEM } from "./actions";

function items(state = [], action) {
  switch (action.type) {
    case CREATE_ITEM:
      return [...state, action.data];
    default:
      return state;
  }
}

export const itemsApp = combineReducers({ items });
