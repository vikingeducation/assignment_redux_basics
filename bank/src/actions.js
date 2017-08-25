// Bank Actions
export const DEPOSIT = "DEPOSIT";
export const TRANSFER = "TRANSFER";
export const WITHDRAWAL = "WITHDRAWAL";
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

export function depositToAccount(id, amount) {
  return {
    type: DEPOSIT_TO_ACCOUNT,
    data: { amount, id, transactionId: nextTransactionId++ }
  };
}

export function withdrawFromAccount(id, amount) {
  return {
    type: WITHDRAW_FROM_ACCOUNT,
    data: { amount, id, transactionId: nextTransactionId++ }
  };
}

export function transferBetweenAccounts(toId, fromId, amount) {
  return {
    type: TRANSFER_BETWEEN_ACCOUNTS,
    data: { toId, fromId, amount, transactionId: nextTransactionId++ }
  };
}

export function setTransactionEndFilter(filter) {
  return {
    type: SET_TRANSACTION_END_FILTER,
    data: filter
  };
}

export function setTransactionStartFilter(filter) {
  return {
    type: SET_TRANSACTION_START_FILTER,
    data: filter
  };
}

export function setTransactionTypeFilter(filter) {
  return {
    type: SET_TRANSACTION_TYPE_FILTER,
    data: filter
  };
}
