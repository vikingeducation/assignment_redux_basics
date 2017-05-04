import { combineReducers } from "redux";

import { ADD_ITEM, PURCHASE_ITEM } from "./actions";

function grocery(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.data];

    case PURCHASE_ITEM:
    return state.map((item)=>{
      if(){}
    })
    default:
      return state;
  }
}

export const groceryApp = combineReducers({
  grocery
});
