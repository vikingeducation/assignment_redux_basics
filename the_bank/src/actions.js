// Set constants for action types
export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";
export const TRANSFER = "TRANSFER";
export const SELECT = "SELECT";
export const FILTER = "FILTER";

let transactionId = 1;
export function deposit(data) {
  console.log("in action", data);
  return {
    type: DEPOSIT,
    data: {
      ...data,
      transactionId: transactionId++
    }
  };
}

export function withdraw(data) {
  return {
    type: WITHDRAW,
    data: {
      ...data,
      transactionId: transactionId++
    }
  };
}

export function transfer(data) {
  return {
    type: TRANSFER,
    data: {
      ...data,
      transactionId: transactionId++
    }
  };
}

export function select(id) {
  return {
    type: SELECT,
    data: id
  };
}

export function filterTrans(data) {
  return {
    type: FILTER,
    data: data
  };
}
