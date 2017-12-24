import { store } from './index';

export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';
export const TRANSFER = 'TRANSFER';
export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';
export const FILTER_BY_DATE = 'FILTER_BY_DATE';

let newAccountId = 1;
export function createAccount(data) {
  return {
    type: CREATE_ACCOUNT,
    data: {
      ...data,
      id: newAccountId++
    }
  };
}

export function deposit(data) {
  return {
    type: DEPOSIT,
    data
  };
}

export function withdraw(data) {
  return {
    type: WITHDRAW,
    data
  };
}

export function transfer(data) {
  return {
    type: TRANSFER,
    data
  };
}

export function selectAccount(id) {
  return {
    type: SELECT_ACCOUNT,
    data: {
      id,
      allAccounts: store.getState().accounts
    }
  };
}

export function filterByDate(data) {
  return {
    type: FILTER_BY_DATE,
    data
  };
}
