export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';

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
