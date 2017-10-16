//constants
export const ADD_ACCOUNT = "ADD_ACCOUNT ";
export const SELECT_ACCOUNT = "SELECT_ACCOUNT";
export const TRANSACTION = "TRANSACTION";
export const TRANSFER = "TRANSFER";
export const FILTER_TRANSACTIONS = "FILTER_TRANSACTIONS";
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
			timeStamp: date.getTime(),
			transactionNumber: transactionNumber++
		}
	};
}
export function transfer(
	accountFrom,
	accountFromType,
	accountTo,
	accountToType,
	date,
	amount
) {
	return {
		type: TRANSFER,
		data: {
			accountFrom, //account number of sender
			accountFromType, //checkings or savings
			accountTo, //account number of receiver
			accountToType, //checking or savings
			date, //date of transaction
			timeStamp: date.getTime(), //used for filtering dates
			amount, //amount sent
			transactionNumber: transactionNumber++
		}
	};
}

export function filterTransactions(dateFrom, dateTo) {
	return {
		type: FILTER_TRANSACTIONS,
		data: {
			dateFrom: dateFrom, //getTime format
			dateTo: dateTo //getTime format
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
