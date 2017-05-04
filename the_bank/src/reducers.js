import {
  DEPOSIT_MONEY,
  WITHDRAWL_MONEY,
  TRANSFER_MONEY,
  SET_DATE_FILTER
} from "./actions";
import {combineReducers} from "redux";

const transHistory = [
  {
    prevBalance: 3999,
    balance: 4000,
    amount: 1,
    method: "debit",
    date: 1111111110,
    targetAccount: "SELF"
  }
];

function updateBalance(state = transHistory, action) {
  switch (action.type) {
    case DEPOSIT_MONEY:
      let newDeposit = {
        method: action.data.method,
        date: action.data.date,
        targetAccount: action.data.targetAccount
      };
      newDeposit.prevBalance = state[state.length - 1].balance;
      newDeposit.balance = state[state.length - 1].balance + action.data.amount;
      newDeposit.amount = action.data.amount;
      return [...state, newDeposit];

    case WITHDRAWL_MONEY:
      let newWithdrawl = {
        method: action.data.method,
        date: action.data.date,
        targetAccount: action.data.targetAccount
      };
      newWithdrawl.prevBalance = state[state.length - 1].balance;
      newWithdrawl.balance = state[state.length - 1].balance -
        action.data.amount;
      newWithdrawl.amount = action.data.amount;
      return [...state, newWithdrawl];

    case TRANSFER_MONEY:
      let newTransfer = {
        method: action.data.method,
        date: action.data.date,
        targetAccount: action.data.targetAccount
      };
      newTransfer.prevBalance = state[state.length - 1].balance;
      newTransfer.balance = state[state.length - 1].balance -
        action.data.amount;
      newTransfer.amount = action.data.amount;
      return [...state, newTransfer];

    default:
      return state;
  }
}

function filterTransactions(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_DATE_FILTER:
      return action.data;
    default:
      return state;
  }
}

export const transactionsApp = combineReducers({
  updateBalance,
  filterTransactions
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
