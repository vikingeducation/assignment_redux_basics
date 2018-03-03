// account
// const account = {
//   type: CREATE_ACCOUNT,
//   payload: {
//     id: 1,
//     owner: 'Joe Seephus',
//     balance: 0,
//     transactions: [],
//   }
// }

export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const FIND_ACCOUNT = 'FIND_ACCOUNT';

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

export function findAccount(id) {
  return {
    type: FIND_ACCOUNT,
    payload: id,
  }
}