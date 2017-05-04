import {
  SELECT_ACCOUNT,
  DEPOSIT_MONEY,
  WITHDRAWL_MONEY,
  TRANSFER_MONEY,
  SET_DATE_FILTER
} from "./actions";
import {combineReducers} from "redux";

const initialState = {
  accounts: [
    {id: 1, balance: 100, transactions: []},
    {id: 2, balance: 200, transactions: []}
  ],
  selectedAccountId: 0
};

function updateBalance(state = initialState, action) {
  switch (action.type) {
    case SELECT_ACCOUNT:
      return {
        ...state,
        selectedAccountId: action.data
      };
    case DEPOSIT_MONEY:
      let newDepositArray = state.accounts.map(account => {
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
            transactions: [...account.transactions, newDeposit]
          };
        }
        return account;
      });
      return {
        ...state,
        accounts: newDepositArray
      };

    case WITHDRAWL_MONEY:
      let newWithdrawlArray = state.accounts.map(account => {
        if (
          account.id === state.selectedAccountId &&
          account.balance > action.data.amount
        ) {
          let newWithdrawl = {
            amount: action.data.amount,
            method: action.data.method,
            date: action.data.date,
            to: null,
            from: account.id
          };
          let newBalance = account.balance - action.data.amount;

          return {
            id: state.selectedAccountId,
            balance: newBalance,
            transactions: [...account.transactions, newWithdrawl]
          };
        }
        return account;
      });
      return {
        ...state,
        accounts: newWithdrawlArray
      };

    default:
      return state;
  }
}

export default updateBalance;
