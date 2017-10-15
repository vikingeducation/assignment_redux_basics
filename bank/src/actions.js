//constants
export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";
export const TRANSFER = "TRANSFER";
export const SELECT_ACCOUNT = "SELECT_ACCOUNT";
export const ADD_ACCOUNT = "ADD_ACCOUNT ";

let transactionNumber = 0;
export function addAccount(data) {
	return {
		type: ADD_ACCOUNT,
		data: data
	};
}

export function deposit(amount) {
	return {
		type: DEPOSIT,
		data: amount
	};
}

//Name:
//Account:
//   checking: amount
//   savings: amount
//Transaction:
//          to:
//          from:
//          amount:
//          date:
//
//
