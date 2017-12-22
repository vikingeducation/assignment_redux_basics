import { combineReducers } from "redux";

import {
  CREATE_ACCOUNT,
  VIEW_ACCOUNT,
  DEPOSIT_ACCOUNT,
  WITHDRAW_ACCOUNT,
  TRANSFER_ACCOUNT,
  VIEW_ACCOUNT_TRANSACTION
} from "./actions.js";

function accounts(state = [], action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return [...state, action.data];
    case DEPOSIT_ACCOUNT:
      return state.map(account => {
        if (account.id === action.data.id) {
          return {
            ...account,
            amount: (account.amount += action.data.amount),
            date: Date.now(),
            transactions: [...action.data]
          };
        }
        return account;
      });
    case WITHDRAW_ACCOUNT:
      return state.map(account => {
        if (account.id === action.data.id) {
          return {
            ...account,
            amount: (account.amount -= action.data.amount),
            date: Date.now(),
            transactions: [...action.data]
          };
        }
        return account;
      });
    case TRANSFER_ACCOUNT:
      return state.map(account => {
        if (
          account.id === action.data.withdrawId
          // action.data.withdrawId < action.data.depositId &&
          // account.amount >= action.data.amount
        ) {
          return {
            ...account,
            amount: (account.amount -= action.data.amount),
            date: Date.now(),
            transactions: [...action.data]
          };
        }
        if (account.id === action.data.depositId) {
          return {
            ...account,
            amount: (account.amount += action.data.amount),
            date: Date.now(),
            transactions: [...action.data]
          };
        }
        return account;
      });
    default:
      return state;
  }
}

function accountFilters(state = "", action) {
  switch (action.type) {
    case VIEW_ACCOUNT:
      return action.data;
    case VIEW_ACCOUNT_TRANSACTION:
      return { ...action.data };
    default:
      return state;
  }
}

export const accountsApp = combineReducers({ accounts, accountFilters });
