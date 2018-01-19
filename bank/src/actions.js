export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const CHECK_ACCOUNT = 'CHECK_ACCOUNT';
export const DEPOSIT_MONEY = 'DEPOSIT_MONEY';
export const TRANSFER_MONEY = 'TRANSFER_MONEY';
export const WITHDRAW_MONEY = 'WITHDRAW_MONEY';
export const SET_FILTER_TRANSACTIONS = 'SET_FILTER_TRANSACTIONS';

// As a bank employee, I want to...
// Select an account to view.
// Deposit money into an account.
// Withdraw money from an account.
// Transfer money between accounts.
// Filter transactions by date (using a start and end date) for an account.

let accId = 100;
export function createAccount(data) {
  return {
    type: CREATE_ACCOUNT,
    data: {
      ...data,
      id: accId++
    }
  }
}

export function checkAccount(data) {
  return {
    type: CHECK_ACCOUNT,
    data
  }
}

export function depositMoney(data) {
  return {
    type: DEPOSIT_MONEY,
    data
  }
}

export function withdrawMoney(data) {
  return {
    type: WITHDRAW_MONEY,
    data
  }
}

export function transferMoney(data) {
  return {
    type: TRANSFER_MONEY,
    data
  }
}

export function setFilterTransactions(data) {
  return {
    type: SET_FILTER_TRANSACTIONS,
    data
  }
}
