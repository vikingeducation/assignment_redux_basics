// Bank Actions
export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const DEPOSIT_TO_ACCOUNT = "DEPOSIT_TO_ACCOUNT";
export const WITHDRAW_FROM_ACCOUNT = "WITHDRAW_FROM_ACCOUNT";
export const TRANSFER_BETWEEN_ACCOUNTS = "TRANSFER_BETWEEN_ACCOUNTS";
export const SET_TRANSACTION_END_FILTER = "SET_TRANSACTION_TYPE_FILTER";
export const SET_TRANSACTION_TYPE_FILTER = "SET_TRANSACTION_TYPE_FILTER";
export const SET_TRANSACTION_START_FILTER = "SET_TRANSACTION_START_FILTER";

let nextTransactionId = 1;
let nextAccountId = 1;

// action factories
export function addAccount(data) {
  return {
    type: ADD_ACCOUNT,
    data: {
      ...data,
      id: nextAccountId++
    }
  };
}

export function depositToAccount(id, data) {
  return {
    type: DEPOSIT_TO_ACCOUNT,
    data: { ...data, id }
  };
}

export function withdrawFromAccount(id) {
  return {
    type: WITHDRAW_FROM_ACCOUNT,
    data: id
  };
}

export function transferBetweenAccounts(data) {
  return {
    type: TRANSFER_BETWEEN_ACCOUNTS,
    data
  };
}

export function setTransactionEndFilter(data) {
  return {
    type: SET_TRANSACTION_END_FILTER,
    data
  };
}

export function setTransactionStartFilter(data) {
  return {
    type: SET_TRANSACTION_START_FILTER,
    data
  };
}

export function setTransactionTypeFilter(data) {
  return {
    type: SET_TRANSACTION_TYPE_FILTER,
    data
  };
}







