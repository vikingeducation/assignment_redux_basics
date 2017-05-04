import {ADD_ITEM} from "./actions";

function groceriesList(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.data];
    default:
      return state;
  }
}

export default groceriesList;
