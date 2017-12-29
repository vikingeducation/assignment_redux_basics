export const VIEW_ACCOUNT = "VIEW_ACCOUNT";
export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const UPDATE_ACCOUNT = "UPDATE_ACCOUNT";
export const DEPOSIT_FUNDS = "DEPOSIT_FUNDS";
export const WITHDRAW_FUNDS = "WITHDRAW_FUNDS";
export const TRANSFER_FUNDS = "TRANSFER_FUNDS";
export const FILTER_TRANSACTIONS = "FILTER_TRANSACTIONS";
export const SET_TRANSACTION_FILTERS = "SET_TRANSACTION_FILTERS";

let nextAccountId = 1;

export function addAccount(data) {
  return {
    type: ADD_ACCOUNT,
    data: {
      ...data,
      id: nextAccountId++
    }
  };
}

export function updateAccount(data) {
  return {
    type: UPDATE_ACCOUNT,
    data
  };
}

export function filterTransactions(data) {
  return {
    type: FILTER_TRANSACTIONS,
    data
  };
}

export function depositFunds(data) {
  return {
    type: DEPOSIT_FUNDS,
    data
  };
}

export function withdrawFunds(data) {
  return {
    type: WITHDRAW_FUNDS,
    data
  };
}

export function transferFunds(data) {
  return {
    type: TRANSFER_FUNDS,
    data
  };
}
