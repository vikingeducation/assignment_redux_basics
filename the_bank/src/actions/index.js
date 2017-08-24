export const ACTION_CREATE_ACCOUNT = 'ACTION_CREATE_ACCOUNT';
export const ACTION_WITHDRAW = 'ACTION_WITHDRAW';
export const ACTION_DEPOSIT = 'ACTION_DEPOSIT';
export const ACTION_TRANSFER = 'ACTION_TRANSFER';

let accountId = 1,
	transactionId = 1;

const createAction = (type, preData) => data => ({
	type,
	data: Object.assign({}, data, preData)
});

export const createAccount = createAction(ACTION_CREATE_ACCOUNT, {
	id: accountId++
});

const transactionProp = {
	id: transactionId++,
	date: new Date().toJSON()
};
export const deposit = createAction(ACTION_DEPOSIT, transactionProp);
export const withdraw = createAction(ACTION_WITHDRAW, transactionProp);
export const transfer = createAction(ACTION_TRANSFER, transactionProp);
