export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const VIEW_ACCOUNT = "VIEW_ACCOUNT";
export const DEPOSIT_ACCOUNT = "DEPOSIT_ACCOUNT";
export const WITHDRAW_ACCOUNT = "WITHDRAW_ACCOUNT";
export const TRANSFER_ACCOUNT = "TRANSFER_ACCOUNT";
export const VIEW_ACCOUNT_TRANSACTION = "VIEW_ACCOUNT_TRANSACTION";

let nextAccountId = 1;
export function createAccount(data) {
  return {
    type: CREATE_ACCOUNT,
    data: {
      ...data,
      id: nextAccountId++
    }
  };
}

export function viewAccount(data) {
  return {
    type: VIEW_ACCOUNT,
    data
  };
}

export function viewAccountTransaction(data, startDate, endDate) {
  return {
    type: VIEW_ACCOUNT_TRANSACTION,
    data: { ...data, startDate, endDate }
  };
}

export function depositAccount(data) {
  return {
    type: DEPOSIT_ACCOUNT,
    data
  };
}

export function withdrawAccount(data) {
  return {
    type: WITHDRAW_ACCOUNT,
    data
  };
}

export function transferAccount(data) {
  return {
    type: TRANSFER_ACCOUNT,
    data
  };
}
