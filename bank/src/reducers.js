import { combineReducers } from "redux";

import {
  ADD_ACCOUNT,
  UPDATE_ACCOUNT,
  DEPOSIT_FUNDS,
  WITHDRAW_FUNDS,
  TRANSFER_FUNDS,
  FILTER_TRANSACTIONS,
  SET_TRANSACTION_FILTERS
} from "./actions";

function accounts(state = [], action) {
  switch (action.type) {
    case ADD_ACCOUNT:
      return [...state, action.data];
    case UPDATE_ACCOUNT:
      return state.map(account => {
        if (account.id === action.data.id) {
          return { ...action.data };
        }
        return account;
      });
    case DEPOSIT_FUNDS:
      return state.map(account => {
        if (account.id === action.data.id) {
          return { ...account, balance: account.balance + action.data.deposit };
        }
        return account;
      });
    case WITHDRAW_FUNDS:
      return state.map(account => {
        if (account.id === action.data.id) {
          return {
            ...account,
            balance: account.balance - action.data.withdraw
          };
        }
        return account;
      });
    case TRANSFER_FUNDS:
      return state.map(account => {
        if (account.id === action.account1.id) {
          return {
            ...account,
            balance: account.balance - action.data.withdraw
          };
        }

        if (account.id === action.account2.id) {
          return { ...account, balance: account.balance + action.data.deposit };
        }

        return account;
      });

    case FILTER_TRANSACTIONS:
      return action.data.filter === "purchased"
        ? state.filter(obj => obj.purchased)
        : action.data.filter === "not purchased"
          ? state.state.filter(obj => !obj.purchased)
          : state;
    default:
      return state;
  }
}

function transactionFilters(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_TRANSACTION_FILTERS:
      return action.data;
    default:
      return state;
  }
}

export const accountApp = combineReducers({ accounts, transactionFilters });
