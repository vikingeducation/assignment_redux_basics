const SELECT_ACCOUNT = "SELECT_ACCOUNT";
const DEPOSIT_TO_ACCOUNT = "DEPOSIT_TO_ACCOUNT";
const WITHDRAW_FROM_ACCOUNT = "WITHDRAW_FROM_ACCOUNT";
const TRANSFER = "TRANSFER";
const SET_FILTER_START = "SET_FILTER_START";
const SET_FILTER_END = "SET_FILTER_END";

export function selectAccount(id) {
	return {
		type: SELECT_ACCOUNT,
		data: id
	};
}

export function depositToAccount(id, amount) {
	return {
		type: DEPOSIT_TO_ACCOUNT,
		data: {
			id: id,
			amount: amount
		}
	};
}

export function withdrawFromAccount(id, amount) {
	return {
		type: WITHDRAW_FROM_ACCOUNT,
		data: {
			id: id,
			amount: amount
		}
	};
}

// data object like: {
//   from: account,
//   to: account,
//   amount: amount
// }

export function transfer(data) {
	return {
		type: TRANSFER,
		data: data
	};
}

export function setFilterStart(date) {
	return {
		type: SET_FILTER_START,
		data: date
	};
}

export function setFilterEnd(date) {
	return {
		type: SET_FILTER_END,
		data: date
	};
}
