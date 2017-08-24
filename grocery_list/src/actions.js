const ADD_ITEM = "ADD_ITEM";
const PURCHASE_ITEM = "PURCHASE_ITEM"
const SET_PURCHASED_FILTER = "SET_PURCHASED_FILTER"

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
    data: id,
  }
}

export function setPurchasedFilter(data) {
  return {
    type: SET_PURCHASED_FILTER,
    data,
  }
}