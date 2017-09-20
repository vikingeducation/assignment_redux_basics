const initialState = {
	accounts: [
		{
			id: 1,
			balance: 100,
			owner: "Batman"
		},
		{
			id: 2,
			balance: 100,
			owner: "Aquaman"
		},
		{
			id: 3,
			balance: 100,
			owner: "Wonder Woman"
		}
	],
	transactions: [
		{
			id: 1,
			origin: null,
			destination: null,
			amount: null,
			date: new Date()
		}
	],
	filterStart: new Date(2000, 0, 1),
	filterEnd: new Date(),
	selectedAccount: 1
};

const SELECT_ACCOUNT = "SELECT_ACCOUNT";
const DEPOSIT_TO_ACCOUNT = "DEPOSIT_TO_ACCOUNT";
const WITHDRAW_FROM_ACCOUNT = "WITHDRAW_FROM_ACCOUNT";
const TRANSFER = "TRANSFER";
const SET_FILTER_START = "SET_FILTER_START";
const SET_FILTER_END = "SET_FILTER_END";

let nextTransactionId = 2;

export function bankApp(state = initialState, action) {
	switch (action.type) {
		case SELECT_ACCOUNT:
			return {
				...state,
				selectedAccount: action.data
			};
		case DEPOSIT_TO_ACCOUNT:
			return {
				...state,
				accounts: state.accounts.map(account => {
					if (account.id === action.data.id) {
						const newBalance = account.balance + action.data.amount;
						return {
							...account,
							balance: newBalance
						};
					}
					return account;
				}),
				transactions: [
					...state.transactions,
					{
						id: nextTransactionId++,
						origin: null,
						destination: action.data.id,
						amount: action.data.amount,
						date: new Date()
					}
				]
			};
		case WITHDRAW_FROM_ACCOUNT:
			return {
				...state,
				accounts: state.accounts.map(account => {
					if (account.id === action.data.id) {
						const newBalance = account.balance - action.data.amount;
						return {
							...account,
							balance: newBalance
						};
					}
					return account;
				}),
				transactions: [
					...state.transactions,
					{
						id: nextTransactionId++,
						origin: action.data.id,
						destination: null,
						amount: action.data.amount,
						date: new Date()
					}
				]
			};
		case TRANSFER:
			return {
				...state,
				accounts: state.accounts.map(account => {
					if (account.id === action.data.from) {
						const newBalance = account.balance - action.data.amount;
						return {
							...account,
							balance: newBalance
						};
					} else if (account.id === action.data.to) {
						const newBalance = account.balance + action.data.amount;
						return {
							...account,
							balance: newBalance
						};
					}
					return account;
				}),
				transactions: [
					...state.transactions,
					{
						id: nextTransactionId++,
						origin: action.data.from,
						destination: action.data.to,
						amount: action.data.amount,
						date: new Date()
					}
				]
			};
		case SET_FILTER_START:
			return {
				...state,
				filterStart: action.data
			};
		case SET_FILTER_END:
			return {
				...state,
				filterEnd: action.data
			};
		default: {
			return state;
		}
	}
}
