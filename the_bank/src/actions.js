// Set constants for action types
export const DEPOSIT = "DEPOSIT";

transactionId = 1;
export function deposit(data) {
  return {
    type: DEPOSIT,
    data: {
      ...data,
      transactionId: transactionId++
    }
  };
}
