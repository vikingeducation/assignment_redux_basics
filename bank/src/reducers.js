import { combineReducers } from "redux";

import { CREATE_ACCOUNT, VIEW_ACCOUNT, DEPOSIT_ACCOUNT } from "./actions.js";

function accounts(state = [], action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return [...state, action.data];
    case VIEW_ACCOUNT:
      return state.map(account => {
        if (account.id === action.data) {
          return account;
        }
      });
    case DEPOSIT_ACCOUNT:
      return state.map(account => {
        if (account.id === action.data.id) {
          return {
            ...account,
            amount: (account.amount += action.data.amount),
            date: new Date("2017-01-27")
          };
        }
        return account;
      });
    default:
      return state;
  }
}

export const accountsApp = combineReducers({ accounts });
