const ADD_ITEM = "ADD_ITEM";
const PURCHASE_ITEM = "PURCHASE_ITEM";
const SET_PURCHASED_FILTER = "SET_PURCHASED_FILTER";
const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";
const SET_SORT_TYPE = "SET_SORT_TYPE";

let nextItemId = 1;

export function addItem(item) {
	return {
		type: ADD_ITEM,
		data: {
			...item,
			id: nextItemId++
		}
	};
}

export function purchaseItem(id) {
	return {
		type: PURCHASE_ITEM,
		data: id
	};
}

export function setPurchasedFilter(data) {
	return {
		type: SET_PURCHASED_FILTER,
		data
	};
}

export function setCategoryFilter(data) {
	return {
		type: SET_CATEGORY_FILTER,
		data
	};
}

export function setSortType(data) {
	return {
		type: SET_SORT_TYPE,
		data
	};
}
