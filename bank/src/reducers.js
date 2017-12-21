import { combineReducers } from "redux";

import { CREATE_ACCOUNT, VIEW_ACCOUNT } from "./actions.js";

function accounts(state = [], action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return [...state, action.data];
    case VIEW_ACCOUNT:
      return state.filter(account => {
        return account.id === action.data;
      });
    default:
      return state;
  }
}

export const accountsApp = combineReducers({ accounts });
