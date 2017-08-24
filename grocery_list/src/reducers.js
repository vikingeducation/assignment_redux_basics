const initialState = {
	categoryFilter: "ALL",
	purchasedFilter: "ALL",
	items: []
};

const ADD_ITEM = "ADD_ITEM";
const PURCHASE_ITEM = "PURCHASE_ITEM"

function groceryApp(state = initialState, action) {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				items: [...state.items, action.data]
			};
		case PURCHASE_ITEM:
			return {
				...state,
				items: state.items.map((item)=>{
					if (item.id === action.data) {
						return {
							...item,
							purchased: true,
						}
					}
					return item
				})
			};
		case SET_PURCHASED_FILTER:
			return {
				...state,
				purchasedFilter: action.data
			}
			

		default:
			return state;
	}
}

export default groceryApp;
