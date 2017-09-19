export const ACTION_CREATE_ACCOUNT = 'ACTION_CREATE_ACCOUNT';
export const ACTION_WITHDRAW = 'ACTION_WITHDRAW';
export const ACTION_DEPOSIT = 'ACTION_DEPOSIT';
export const ACTION_TRANSFER = 'ACTION_TRANSFER';

const createAction = type => data => {
	return {
		type,
		data: Object.assign({}, data)
	};
};

// const createAction2 = (type, defaults) => data => {
// 	defaults.id = incrementId(type);
// 	defaults.date = new Date().toJSON();
// 	defaults.transactions = Array.of(...defaults.transactions);
// 	return {
// 		type,
// 		data: Object.assign({}, defaults, data)
// 	};
// }
//
// function createAction3(type, defaults = {}) {
// 	defaults.id = incrementId(type);
// 	defaults.date = new Date().toJSON();
// 	switch (type) {
// 		case ACTION_CREATE_ACCOUNT:
// 			return function(data) {
// 				defaults.transactions = [];
// 				return {
// 					type,
// 					data: Object.assign({}, defaults, data)
// 				};
// 			};
// 		default:
// 			return function(data) {
// 				return {
// 					type,
// 					data: Object.assign({}, defaults, data)
// 				};
// 			};
// 	}
// }

export const createAccount = createAction(ACTION_CREATE_ACCOUNT);
export const deposit = createAction(ACTION_DEPOSIT);
export const withdraw = createAction(ACTION_WITHDRAW);
export const transfer = createAction(ACTION_TRANSFER);
