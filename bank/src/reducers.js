import { combineReducers } from "redux";

import { TRANSACTION, ADD_ACCOUNT, SELECT_ACCOUNT } from "./actions";

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
