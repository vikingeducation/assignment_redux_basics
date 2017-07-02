export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';
export const DEPOSIT_MONEY = 'DEPOSIT_MONEY';
export const WITHDRAW_MONEY = 'WITHDRAW_MONEY';
export const TRANSFER_MONEY = 'TRANSFER_MONEY';
export const SET_TRANSACTION_FILTER = 'SET_TRANSACTION_FILTER';

export function selectAccount(data) {
  return {
    type: SELECT_ACCOUNT,
    data
  }
};

export function depositMoney(data) {
  return {
    type: DEPOSIT_MONEY,
    data: {
      ...data,
      kind: 'deposit'
    }
  }
};

export function withdrawMoney(data) {
  return {
    type: WITHDRAW_MONEY,
    data: {
      ...data,
      kind: 'withdrawal'
    }
  }
};

export function transferMoney(data) {
  return {
    type: TRANSFER_MONEY,
    data: {
      ...data,
      kind: 'transfer'
    }
  }
};

export function setTransactionFilter(data) {
  return {
    type: SET_TRANSACTION_FILTER,
    data
  }
};