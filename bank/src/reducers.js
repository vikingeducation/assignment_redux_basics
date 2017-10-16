import { combineReducers } from "redux";

import { DEPOSIT, ADD_ACCOUNT, SELECT_ACCOUNT } from "./actions";

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
		case DEPOSIT:
			//gets account to deposit into
			return state.map(item => {
				if (item.accountNumber === actions.data.accountNumber) {
					if (
						actions.data.transactionAccount === "checkings" ||
						actions.data.transactionAccount === "savings"
					) {
						let test = actions.data.transactionAccount;
						console.log("test", test);
						console.log("amount", item.accounts[test]);
						return {
							...item,
							accounts: {
								...item.account,
								[test]: item.accounts[test] + actions.data.transactionAmount
							},
							transactions: [
								...item.transactions,
								{
									transactionNumber: actions.data.transactionNumber,
									date: actions.data.date,
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
	accounts
});
