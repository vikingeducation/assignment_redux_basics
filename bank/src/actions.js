//constants
export const DEPOSIT = "DEPOSIT";
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

export function deposit(accountNumber, account, amount, date) {
	return {
		type: DEPOSIT,
		data: {
			accountNumber,
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
