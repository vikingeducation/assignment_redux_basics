import {combineReducers} from 'redux';
import {CREATE_ACCOUNT} from "../actions/accounts";
import {DEPOSIT, TRANSFER, WITHDRAWAL} from "../actions/transactions";


function accounts(state = [], action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return [
        ...state,
        action.payload,
      ];
    case DEPOSIT:
      return state.map(account => {
        if (account.id === action.payload.accountId) {
          let transaction = {
            ...action.payload,
            type: 'deposit'
          };
          account.balance += action.payload.amount;

          return {
            ...account,
            transactions: [...account.transactions, transaction]
          }
        }
        return account;
      });
    case WITHDRAWAL:
      return state.map(account => {
        if (account.id === action.payload.accountId) {
          let transaction = {
            ...action.payload,
            type: 'withdrawal'
          };
          account.balance -= action.payload.amount;

          return {
            ...account,
            transactions: [...account.transactions, transaction]
          }
        }
        return account;
      });
    case TRANSFER:
      return state.map(account => {
        if (account.id === action.payload.receiverId) {
          let transaction = {
            ...action.payload,
            type: 'transfer from'
          };
          account.balance += action.payload.amount;

          return {
            ...account,
            transactions: [...account.transactions, transaction]
          }
        } else if (account.id === action.payload.payerId) {
          let transaction = {
            ...action.payload,
            type: 'transfer to'
          };
          account.balance -= action.payload.amount;

          return {
            ...account,
            transactions: [...account.transactions, transaction]
          }
        }

        return account;
      });
    default:
      return state
  }
}

export const bankApp = combineReducers({
  accounts,
});