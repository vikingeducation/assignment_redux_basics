export const DEPOSIT = 'DEPOSIT';
export const WITHDRAWAL = 'WITHDRAWAL';
export const TRANSFER = 'TRANSFER';

let nextTransactionId = 1;
export function makeDeposit(amount, accountId) {
  return {
    type: DEPOSIT,
    payload: {
      id: nextTransactionId++,
      accountId,
      amount,
    }
  }
}

export function makeWithdrawal(amount, accountId) {
  return {
    type: WITHDRAWAL,
    payload: {
      id: nextTransactionId++,
      accountId,
      amount,
    }
  }
}

export function makeTransfer(payerId, receiverId, amount) {
  return {
    type: TRANSFER,
    payload: {
      id: nextTransactionId++,
      payerId,
      receiverId,
      amount,
    }
  }
}