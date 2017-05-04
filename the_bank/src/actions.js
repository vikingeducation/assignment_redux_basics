export const DEPOSIT_MONEY = "DEPOSIT_MONEY";
export const WITHDRAWL_MONEY = "WITHDRAWL_MONEY";
export const TRANSFER_MONEY = "TRANSFER_MONEY";
export const SET_DATE_FILTER = "SET_DATE_FILTER";

let date = 1111111111;

export function depositMoney(data) {
  return {
    type: DEPOSIT_MONEY,
    data: {
      ...data,
      targetAccount: "SELF",
      method: "debit",
      date: date++
    }
  };
}

export function withdrawlMoney(data) {
  return {
    type: WITHDRAWL_MONEY,
    data: {
      ...data,
      targetAccount: null,
      method: "credit",
      date: date++
    }
  };
}

export function transferMoney(data) {
  return {
    type: TRANSFER_MONEY,
    data: {
      ...data,
      method: "credit",
      date: date++
    }
  };
}

export function setDateFilter(data) {
  return {
    type: SET_DATE_FILTER,
    data
  };
}
