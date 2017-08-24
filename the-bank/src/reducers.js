// reducers
import {
  DEPOSIT_FUNDS,
  WITHDRAW_FUNDS,
  TRANSFER_FUNDS,
  SET_TRANSACTIONS_DATE_FILTER,
  SET_CURRENT_ACCOUNT
} from "./actions";

export function accounts(state = [], action) {
  switch (action.type) {
    case DEPOSIT_FUNDS:
      return state.map(account => {
        if (account.id === action.data.id) {
          return {
            ...account,
            balance: account.balance + action.data.amount,
            transactions: [
              ...account.transactions,
              { date: Date.now(), amount: action.data.amount }
            ]
          };
        }
        return account;
      });
      break;
    case WITHDRAW_FUNDS:
      return state.map(account => {
        if (account.id === action.data.id) {
          return {
            ...account,
            balance: account.balance - action.data.amount,
            transactions: [
              ...account.transactions,
              { date: Date.now(), amount: -action.data.amount }
            ]
          };
        }
        return account;
      });
      break;
    case TRANSFER_FUNDS:
      return state.map(account => {
        if (account.id === action.data.recipientId) {
          return {
            ...account,
            balance: account.balance + action.data.amount,
            transactions: [
              ...account.transactions,
              { date: Date.now(), amount: action.data.amount }
            ]
          };
        }
        if (account.id === action.data.senderId) {
          return {
            ...account,
            balance: account.balance - action.data.amount,
            transactions: [
              ...account.transactions,
              { date: Date.now(), amount: -action.data.amount }
            ]
          };
        }
        return account;
      });
      break;
    default:
      return state;
  }
}
export function transactionsDateFilter(state = "NEVER", action) {
  switch (action.type) {
    case SET_TRANSACTIONS_DATE_FILTER:
      return action.data;
      break;
    default:
      return state;
  }
}
export function currentAccount(state = [], action) {
  switch (action.type) {
    case SET_CURRENT_ACCOUNT:
      return action.data;
      break;
    default:
      return state;
  }
}
