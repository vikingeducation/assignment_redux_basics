export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const FIND_ACCOUNT_BY_ID = 'FIND_ACCOUNT_BY_ID';


let nextAccountId = 1;
export function createAccount(payload) {
  return {
    type: CREATE_ACCOUNT,
    payload: {
      id: nextAccountId++,
      ...payload,
      transactions: [],
    }
  }
}

export function findAccountById(id) {
  return {
    type: FIND_ACCOUNT_BY_ID,
    payload: id,
  }
}