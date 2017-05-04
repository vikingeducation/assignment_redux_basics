import {
  SELECT_ACCOUNT,
  DEPOSIT_MONEY,
  WITHDRAWL_MONEY,
  TRANSFER_MONEY,
  SET_DATE_FILTER
} from "./actions";
import { combineReducers } from "redux";

const initialState = {
  accounts: [
    { id: 1, balance: 100, transactions: [] },
    { id: 2, balance: 200, transactions: [] }
  ],
  selectedAccountId: 0
};

function accountSelection(state = initialState.selectedAccountId, action) {
  switch (action.type) {
    case SELECT_ACCOUNT:
      return action.data;
    default:
      return state;
  }
}

function updateBalance(state = initialState, action) {
  switch (action.type) {
    case DEPOSIT_MONEY:
      return state.accounts.map(account => {
        if (account.id === state.selectedAccountId) {
          let newDeposit = {
            amount: action.data.amount,
            method: action.data.method,
            date: action.data.date,
            to: account.id,
            from: null
          };
          let newBalance = account.balance + action.data.amount;

          return {
            id: state.selectedAccountId,
            balance: newBalance,
            transactions: [...action.transactions, newDeposit]
          };
        }
        return account;
      });
    // case WITHDRAWL_MONEY:
    //   let newWithdrawl = {
    //     method: action.data.method,
    //     date: action.data.date,
    //     targetAccount: action.data.targetAccount
    //   };
    //   newWithdrawl.prevBalance = state[state.length - 1].balance;
    //   newWithdrawl.balance = state[state.length - 1].balance -
    //     action.data.amount;
    //   newWithdrawl.amount = action.data.amount;
    //   return [...state, newWithdrawl];

    // case TRANSFER_MONEY:
    //   let newTransfer = {
    //     method: action.data.method,
    //     date: action.data.date,
    //     targetAccount: action.data.targetAccount
    //   };
    //   newTransfer.prevBalance = state[state.length - 1].balance;
    //   newTransfer.balance = state[state.length - 1].balance -
    //     action.data.amount;
    //   newTransfer.amount = action.data.amount;
    //   return [...state, newTransfer];


    default:
      return state;
  }
}
// function filterTransactions(state = "SHOW_ALL", action) {
//   switch (action.type) {
//     case SET_DATE_FILTER:
//       return action.data;
//     default:
//       return state;
//   }
// }

export const transactionsApp = combineReducers({
  accountSelection,
  updateBalance
});

//
//
// {
//   prevBalance: state[state.length].balance
//   balance: state[state.length].balance+data.amount
//   transactionAmount: data.amount
// }
//
//
// {
//   prevBalance: state[state.length].balance
//   balance: state[state.length].balance+data.amount
//   transactionAmount: data.amount
//   method: "debit",
//   date: date++
// }
//
