import { combineReducers } from "redux";

import { DEPOSIT, WITHDRAW, TRANSFER, SELECT, FILTER } from "./actions";

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

const newState = {
  accounts: accounts,
  transactions: [],
  selectedUser: {},
  filteredTransactions: {}
};

export function bankTransactions(state = newState, action) {
  switch (action.type) {
    case DEPOSIT:
      return {
        accounts: state.accounts.map(account => {
          if (account.id === action.data.accountId) {
            return {
              id: account.id,
              amount: account.amount + action.data.amount
            };
          }
          return account;
        }),
        transactions: [
          ...state.transactions,
          {
            id: action.data.transactionId,
            date: Date.now(),
            amount: action.data.amount,
            type: "deposit",
            from: null,
            to: action.data.accountId
          }
        ],
        selectedUser: updateSelectedUser(state.selectedUser, action),
        filteredTransactions: state.filteredTransactions
      };
    case WITHDRAW:
      return {
        accounts: state.accounts.map(account => {
          if (account.id === action.data.accountId) {
            return {
              id: account.id,
              amount: account.amount - action.data.amount
            };
          }
          return account;
        }),
        transactions: [
          ...state.transactions,
          {
            id: action.data.transactionId,
            date: Date.now(),
            amount: action.data.amount,
            type: "withdraw",
            from: action.data.accountId,
            to: null
          }
        ],
        selectedUser: updateSelectedUser(state.selectedUser, action),
        filteredTransactions: state.filteredTransactions
      };
    case TRANSFER:
      return {
        accounts: state.accounts.map(account => {
          if (account.id === action.data.from) {
            return {
              id: account.id,
              amount: account.amount - action.data.amount
            };
          }
          if (account.id === action.data.to) {
            return {
              id: account.id,
              amount: account.amount + action.data.amount
            };
          }
          return account;
        }),
        transactions: [
          ...state.transactions,
          {
            id: action.data.transactionId,
            date: Date.now(),
            amount: action.data.amount,
            type: "transfer",
            from: action.data.from,
            to: action.data.to
          }
        ],
        selectedUser: updateSelectedUser(state.selectedUser, action),
        filteredTransactions: state.filteredTransactions
      };
    case SELECT:
      return {
        accounts: state.accounts,
        transactions: state.transactions,
        selectedUser: state.accounts.find(account => {
          return account.id === action.data;
        }),
        filteredTransactions: state.filteredTransactions
      };

    case FILTER:
      return {
        accounts: state.accounts,
        transactions: state.transactions,
        selectedUser: state.selectedUser,
        filteredTransactions: state.transactions.filter(transaction => {
          return (
            (!action.data.start || transaction.date > action.data.start) &&
            (!action.data.end || transaction.date < action.data.end)
          );
        })
      };

    default:
      return state;
  }
}

function updateSelectedUser(selectedUser, action) {
  if (!selectedUser.id) {
    return selectedUser;
  }
  switch (action.type) {
    case DEPOSIT:
      return {
        ...selectedUser,
        amount: selectedUser.id === action.data.accountId
          ? selectedUser.amount + action.data.amount
          : selectedUser.amount
      };
    case WITHDRAW:
      return {
        ...selectedUser,
        amount: selectedUser.id === action.data.accountId
          ? selectedUser.amount - action.data.amount
          : selectedUser.amount
      };
    case TRANSFER:
      if (selectedUser.id === action.data.to) {
        return {
          ...selectedUser,
          amount: selectedUser.amount + action.data.amount
        };
      } else if (selectedUser.id === action.data.from) {
        return {
          ...selectedUser,
          amount: selectedUser.amount - action.data.amount
        };
      } else {
        return {
          ...selectedUser
        };
      }
  }
}
