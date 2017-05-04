// Set constants for action types
export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";
export const TRANSFER = "TRANSFER";

let transactionId = 1;
export function deposit(data) {
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
