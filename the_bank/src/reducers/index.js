import {
	ACTION_CREATE_ACCOUNT,
	ACTION_WITHDRAW,
	ACTION_DEPOSIT,
	ACTION_TRANSFER
} from '../actions';

const initialState = {
	accounts: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ACTION_CREATE_ACCOUNT:
			return {
				...state,
				accounts: [...state.accounts, action.data]
			};
		case ACTION_WITHDRAW:
		case ACTION_DEPOSIT:
			const accounts = state.accounts.map(account => {
				if (account.id === action.data.accountId) {
					const amount = action.data.amount;
					account.funds += action.type === ACTION_WITHDRAW ? -amount : amount;
					account.transactions.push(action.data);
				}
				return account;
			});
			return {
				...state,
				accounts
			};
		case ACTION_TRANSFER:
			const from = state.accounts.find(
				account => account.id === action.data.fromAccountId
			);
			const to = state.accounts.find(
				account => account.id === action.data.toAccountId
			);
			if (!from || !to) return state;

			// Extract amount.
			const amount = action.data.amount;

			// Remove funds from source account.
			from.funds -= amount;
			from.transactions.push(action.data);

			// Add funds to target account.
			to.funds += amount;
			to.transactions.push(action.data);

			return {
				...state,
				accounts
			};
		default:
			return state;
	}
};
