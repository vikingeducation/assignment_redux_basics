import { combineReducers } from 'redux';
import {
  CREATE_ACCOUNT,
  DEPOSIT,
  WITHDRAW,
  TRANSFER,
  SELECT_ACCOUNT,
  FILTER_BY_DATE
} from './actions';

function accounts(state = [], action) {
  switch (action.type) {
  case CREATE_ACCOUNT:
    return [
      ...state,
      action.data
    ];
  case DEPOSIT:
    return state.map(account => {
      if (account.id === action.data.id) {
        return {
          ...account,
          balance: account.balance + action.data.amount
        };
      }
      return account;
    });
  case WITHDRAW:
    return state.map(account => {
      if (account.id === action.data.id) {
        return {
          ...account,
          balance: account.balance - action.data.amount
        };
      }
      return account;
    });
  case TRANSFER:
    return state.map(account => {
      if (account.id === action.data.to) {
        return {
          ...account,
          balance: account.balance + action.data.amount
        };
      } else if (account.id === action.data.from) {
        return {
          ...account,
          balance: account.balance - action.data.amount
        };
      }
      return account;
    });
  default:
    return state;
  }
}

function selectedAccount(state = 'NONE', action) {
  switch (action.type) {
  case SELECT_ACCOUNT:
    return action.data.allAccounts.find(account => {
      return account.id === action.data.id;
    });
  default:
    return state;
  }
}

function filterByDate(state = null, action) {
  switch (action.type) {
  case FILTER_BY_DATE:
    return {
      start: action.data.start,
      end: action.data.end
    };
  default:
    return state;
  }
}

export const bankApp = combineReducers({ accounts, selectedAccount, filterByDate });
