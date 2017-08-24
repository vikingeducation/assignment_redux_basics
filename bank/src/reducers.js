import { combineReducers } from "redux";
// import actions here
import {
  DEPOSIT,
  TRANSFER,
  WITHDRAWAL,
  ADD_ACCOUNT,
  DEPOSIT_TO_ACCOUNT,
  WITHDRAW_FROM_ACCOUNT,
  TRANSFER_BETWEEN_ACCOUNTS,
  SET_TRANSACTION_START_FILTER,
  SET_TRANSACTION_END_FILTER,
  SET_TRANSACTION_TYPE_FILTER
} from "./actions";

// schemas
const accountSchema = [
  {
    id: 1,
    owner: "bob",
    balance: 10
  }
];

const transaction = [
  {
    type: "deposit",
    id: 1,
    sourceAccountId: null,
    destinationAccountId: 2,
    amount: 500,
    date: Date.now() // default
  },
  {
    type: "withdrawl",
    id: 1,
    sourceAccountId: 1,
    destinationAccountId: null,
    amount: 500,
    date: Date.now() // default
  },

  {
    type: "transfer",
    id: 1,
    sourceAccountId: 1,
    destinationAccountId: 2,
    amount: 500,
    date: Date.now() // default
  }
];

const transactionsStartFilterSchema = "ALL"; // SHOW_{AFTER_[DATE], ALL}

const transactionsEndFilterSchema = "ALL"; // SHOW_{BEFORE_[DATE], ALL}

const transactionsTypeFilterSchema = "ALL"; // SHOW_{DEPOSIT, WITHDRAWAL, TRANSFER, ALL}

// reducers
function bank(state = { accounts: [], transactions: [] }, action) {
  // payload = {}
  // let copy = Object.assign({}, state) // copy.accounts = copy.accounts.map

  switch (action.type) {
    case ADD_ACCOUNT:
      return {
        accounts: [...state.accounts, action.data],
        transactions: [...state.transactions]
      };

    case DEPOSIT_TO_ACCOUNT:
      let doDeposit = false;
      const depositAccounts = state.accounts.map(account => {
        if (account.id === action.data.id) {
          doDeposit = true;
          return { ...account, amount: account.amount + action.data.amount };
        } else {
          return account;
        }
      });

      if (doDeposit) {
        const depositTransaction = {
          type: DEPOSIT,
          id: action.data.transactionId,
          sourceAccountId: null,
          destinationAccountId: action.data.id,
          amount: action.data.amount,
          date: action.data.date || Date.now()
        };

        return {
          accounts: depositAccounts,
          transactions: [...state.transactions, depositTransaction]
        };
      } else {
        return { ...state };
      }

    case WITHDRAW_FROM_ACCOUNT:
      const withdrawAccounts = state.accounts.map(
        account =>
          account.id === action.data.id
            ? { ...account, amount: account.amount - action.data.amount }
            : account
      );
      const withdrawTransaction = {
        type: WITHDRAWAL,
        id: action.data.transactionId,
        sourceAccountId: action.data.id,
        destinationAccountId: null,
        amount: action.data.amount,
        date: action.data.date || Date.now()
      };
      return {
        accounts: withdrawAccounts,
        transactions: [...state.transactions, withdrawTransaction]
      };

    case TRANSFER_BETWEEN_ACCOUNTS:
      let to = false;
      let from = false;
      const transferAccounts = state.accounts.map(account => {
        if (account.id === action.data.toId) {
          to = true;
          return { ...account, amount: account.amount + action.data.amount };
        } else if (account.id === action.data.fromId) {
          from = true;
          return { ...account, amount: account.amount - action.data.amount };
        } else {
          return account;
        }
      });
      if (to && from) {
        const transferTransaction = {
          type: TRANSFER,
          id: action.data.transactionId,
          sourceAccountId: action.data.fromId,
          destinationAccountId: action.data.toId,
          amount: action.data.amount,
          date: action.data.date || Date.now()
        };
        return {
          accounts: transferAccounts,
          transactions: [...state.transactions, transferTransaction]
        };
      } else return state;

    default:
      return state;
  }
}

function transactionEndFilter(state = "ALL", action) {
  switch (action.type) {
    case SET_TRANSACTION_END_FILTER:
      return action.data;

    default:
      return state;
  }
}

function transactionStartFilter(state = "ALL", action) {
  switch (action.type) {
    case SET_TRANSACTION_START_FILTER:
      return action.data;

    default:
      return state;
  }
}

function transactionTypeFilter(state = "ALL", action) {
  switch (action.type) {
    case SET_TRANSACTION_TYPE_FILTER:
      return action.data;

    default:
      return state;
  }
}

export const bankApp = combineReducers({
  bank,
  transactionStartFilter,
  transactionEndFilter,
  transactionTypeFilter
});
