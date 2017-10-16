import { combineReducers } from "redux";

import {
	ADD_ACCOUNT,
	SELECT_ACCOUNT,
	TRANSFER,
	TRANSACTION,
	FILTER_TRANSACTIONS
} from "./actions";

function accounts(state = [], actions) {
	switch (actions.type) {
		case ADD_ACCOUNT:
			return [...state, actions.data];
			break;
		case SELECT_ACCOUNT:
			console.log(
				"SELECT_ACCOUNT",
				state.filter(account => account.accountNumber === actions.data)[0]
			);
			return state;
			break;
		case TRANSACTION:
			//sets amount to alter the account as positive or negative depending on type of transaction
			actions.data.transactionAmount =
				actions.data.type === "deposit"
					? actions.data.transactionAmount
					: actions.data.type === "withdrawal"
						? actions.data.transactionAmount * -1
						: actions.data.transactionAmount;
			//gets account to deposit into
			return state.map(item => {
				if (item.accountNumber === actions.data.accountNumber) {
					if (
						actions.data.transactionAccount === "checkings" ||
						actions.data.transactionAccount === "savings"
					) {
						let account = actions.data.transactionAccount;
						return {
							...item,
							[account]: item[account] + actions.data.transactionAmount,
							transactions: [
								...item.transactions,
								{
									transactionNumber: actions.data.transactionNumber,
									type: actions.data.type,
									date: actions.data.date,
									timeStamp: actions.data.timeStamp,
									account: actions.data.transactionAccount,
									amount: actions.data.transactionAmount
								}
							]
						};
					}
				}
				return item;
			});

			break;
		/*
				accountFrom: 100,
				accountFromType: "checking",
				accountTo: 101,
				accountToTyop: "savings",
				date: "Oct 16th 17 5:39"
			*/
		case TRANSFER:
			let from = actions.data.accountFrom;
			let to = actions.data.accountTo;
			let fromType = actions.data.accountFromType;
			let toType = actions.data.accountToType;
			return state.map(account => {
				if (account.accountNumber === from) {
					return {
						...account,
						[fromType]: account[fromType] - actions.data.amount,
						transactions: [
							...account.transactions,
							{
								transactionNumber: actions.data.transactionNumber,
								type: "withdrawal",
								date: actions.data.date,
								timeStamp: actions.data.timeStamp,
								account: fromType,
								amount: actions.data.amount
							}
						]
					};
				}
				if (account.accountNumber === to) {
					return {
						...account,
						[toType]: account[toType] + actions.data.amount,
						transactions: [
							...account.transactions,
							{
								transactionNumber: actions.data.transactionNumber,
								type: "deposit",
								date: actions.data.date,
								timeStamp: actions.data.timeStamp,
								account: toType,
								amount: actions.data.amount
							}
						]
					};
				}
				return account;
			});

			break;
		default:
			return state;
	}
}

function filters(state = {}, action) {
	switch (action.type) {
		case FILTER_TRANSACTIONS:
			return {
				from: action.data.dateFrom,
				to: action.data.dateTo
			};
			break;
		default:
			return state;
	}
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

export const bankApp = combineReducers({
	accounts,
	filters
});
