import { combineReducers } from "redux";
// import actions here
import {
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

const transactionsStartFilterSchema = "SHOW_ALL"; // SHOW_{AFTER_[DATE], ALL}

const transactionsEndFilterSchema = "SHOW_ALL"; // SHOW_{BEFORE_[DATE], ALL}

const transactionsTypeFilterSchema = "SHOW_ALL"; // SHOW_{DEPOSIT, WITHDRAWAL, TRANSFER, ALL}

// reducers
function groceries(state = [], action) {
  switch (action.type) {
    case PURCHASE_GROCERY:
      return state.map(
        grocery =>
          grocery.id === action.data ? { ...grocery, purchased: true } : grocery
      );

    case ADD_GROCERY:
      return [...state, action.data];

    case ADD_GROCERIES:
      return [...state, ...action.data];

    case UPDATE_GROCERY:
      return state.map(
        grocery =>
          grocery.id === action.data.id
            ? { ...grocery, ...action.data }
            : grocery
      );

    case DELETE_GROCERY:
      return state.filter(grocery => grocery.id !== action.data);

    default:
      return state;
  }
}

function purchaseFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_PURCHASE_FILTER:
      return action.data;

    default:
      return state;
  }
}

function categoryFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.data;

    default:
      return state;
  }
}

export const groceriesApp = combineReducers({
  groceries,
  purchaseFilter,
  categoryFilter
});
