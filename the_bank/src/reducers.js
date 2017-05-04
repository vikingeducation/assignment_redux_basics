import { combineReducers } from "redux";

import { DEPOSIT } from "./actions";

let accounts = [
  {
    id: 1,
    amount: 1000
  },
  {
    id: 2,
    amount: 10000
  },
  {
    id: 3,
    amount: 10001
  }
];

function bankTransactions(
  state = { accounts: accounts, transactions: [] },
  action
) {
  switch (action.type) {
    case DEPOSIT:
      return {
        accounts: state.accounts.map(account => {
          if (account.id === action.data.accountId) {
            account.ammount += action.data.ammount;
            return account;
          }
          return account;
        }),
        transactions: [...state.transactions, action.data]
      };

    default:
  }
}
