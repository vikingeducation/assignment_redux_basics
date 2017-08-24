const ADD_ITEM = "ADD_ITEM";

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

export function purchaseItem(id) {}
