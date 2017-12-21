export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const VIEW_ACCOUNT = "VIEW_ACCOUNT";
export const DEPOSIT_ACCOUNT = "VIEW_ACCOUNT";

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

export function viewAccount(id) {
  return {
    type: VIEW_ACCOUNT,
    data: id
  };
}

export function depositAccount(data) {
  return {
    type: DEPOSIT_ACCOUNT,
    data
  };
}
