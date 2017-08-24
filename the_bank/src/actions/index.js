export const ACTION_CREATE_ACCOUNT = 'ACTION_CREATE_ACCOUNT';
export const ACTION_WITHDRAW = 'ACTION_WITHDRAW';
export const ACTION_DEPOSIT = 'ACTION_DEPOSIT';
export const ACTION_TRANSFER = 'ACTION_TRANSFER';

let accountId = 0,
	transactionId = 0;
const incrementId = type => {
	let id = 0;
	switch (type) {
		case ACTION_CREATE_ACCOUNT:
			id = ++accountId;
			break;
		default:
			id = ++transactionId;
	}
	return id;
};

const createAction = (type, defaults = {}) => data => {
	defaults.id = incrementId(type);
	defaults.date = new Date().toJSON();
	return {
		type,
		data: Object.assign({}, defaults, data)
	};
};

export const createAccount = createAction(ACTION_CREATE_ACCOUNT, {
	transactions: [],
	funds: 0
});

export const deposit = createAction(ACTION_DEPOSIT);
export const withdraw = createAction(ACTION_WITHDRAW);
export const transfer = createAction(ACTION_TRANSFER);
