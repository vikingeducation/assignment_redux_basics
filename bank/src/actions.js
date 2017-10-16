//constants
export const TRANSACTION = "TRANSACTION";
export const WITHDRAW = "WITHDRAW";
export const TRANSFER = "TRANSFER";
export const SELECT_ACCOUNT = "SELECT_ACCOUNT";
export const ADD_ACCOUNT = "ADD_ACCOUNT ";
let accountNumber = 100;
let transactionNumber = 1;
export function addAccount(data) {
	return {
		type: ADD_ACCOUNT,
		data: {
			...data,
			accountNumber: accountNumber++
		}
	};
}

export function selectAccount(accountNumber) {
	return {
		type: SELECT_ACCOUNT,
		data: accountNumber
	};
}

export function transaction(type, accountNumber, account, amount, date) {
	return {
		type: TRANSACTION,
		data: {
			accountNumber,
			type,
			transactionAccount: account,
			transactionAmount: amount,
			date,
			transactionNumber: transactionNumber++
		}
	};
}

//Name:
//Account:
//   checking: amount
//   savings: amount
//transaction:
//          to:
//          from:
//          amount:
//          date:
//
//
