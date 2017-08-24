//action constants
export const DEPOSIT_FUNDS = `DEPOSIT_FUNDS`;
export const WITHDRAW_FUNDS = `WITHDRAW_FUNDS`;
export const TRANSFER_FUNDS = `TRANSFER_FUNDS`;
export const SET_TRANSACTIONS_DATE_FILTER = `SET_TRANSACTIONS_DATE_FILTER`;
export const SET_CURRENT_ACCOUNT = `SET_CURRENT_ACCOUNT`;

//action creators

export const depositFunds = data => {
  return {
    type: DEPOSIT_FUNDS,
    data: { ...data }
  };
};
export const withdrawFunds = data => {
  return {
    type: WITHDRAW_FUNDS,
    data: { ...data }
  };
};
export const transferFunds = data => {
  return {
    type: TRANSFER_FUNDS,
    data: { ...data }
  };
};
export const setTransactionsDateFilter = data => {
  return {
    type: SET_TRANSACTIONS_DATE_FILTER,
    data: { ...data }
  };
};
export const setCurrentAccount = id => {
  return {
    type: SET_CURRENT_ACCOUNT,
    data: id
  };
};
