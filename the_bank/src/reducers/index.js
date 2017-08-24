import {
	ACTION_CREATE_ACCOUNT,
	ACTION_WITHDRAW,
	ACTION_DEPOSIT,
	ACTION_TRANSFER
} from '../actions';

const initialState = {
	accounts: []
};

let transactionId = 0;
export default (state = initialState, action) => {
	let accounts = state.accounts.slice();
	switch (action.type) {
		case ACTION_CREATE_ACCOUNT:
			action.data = Object.assign(
				{
					id: accounts.length + 1,
					funds: 0,
					transactions: [],
					date: new Date().toJSON()
				},
				action.data
			);
			return {
				...state,
				accounts: [...accounts, action.data]
			};
		case ACTION_WITHDRAW:
		case ACTION_DEPOSIT:
			accounts = accounts.map(account => {
				if (account.id === action.data.accountId) {
					const amount = action.data.amount;
					account.funds += action.type === ACTION_WITHDRAW ? -amount : amount;

					action.data = Object.assign(
						{
							id: ++transactionId,
							date: new Date().toJSON()
						},
						action.data
					);
					console.log(action, 'ACTION');
					account.transactions.push(action);
				}
				return account;
			});
			return {
				...state,
				accounts
			};
		case ACTION_TRANSFER:
			const from = accounts.find(
				account => account.id === action.data.fromAccountId
			);
			const to = accounts.find(
				account => account.id === action.data.toAccountId
			);
			if (!from || !to) return state;

			// Extract amount.
			const amount = action.data.amount;
			action.data.date = new Date().toJSON();
			action.data.id = ++transactionId;

			// Remove funds from source account.
			from.funds -= amount;
			from.transactions.push(action);

			action.data.id = ++transactionId;

			// Add funds to target account.
			to.funds += amount;
			to.transactions.push(action);
			console.log(state);

			return {
				...state,
				accounts
			};
		default:
			return state;
	}
};
