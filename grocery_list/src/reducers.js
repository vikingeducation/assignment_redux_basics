const initialState = {
	categoryFilter: "all",
	purchasedFilter: "ALL",
	sortType: "name",
	items: []
};

const ADD_ITEM = "ADD_ITEM";
const PURCHASE_ITEM = "PURCHASE_ITEM";
const SET_PURCHASED_FILTER = "SET_PURCHASED_FILTER";
const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";
const SET_SORT_TYPE = "SET_SORT_TYPE";

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
				items: state.items.map(item => {
					if (item.id === action.data) {
						return {
							...item,
							purchased: true
						};
					}
					return item;
				})
			};
		case SET_PURCHASED_FILTER:
			return {
				...state,
				purchasedFilter: action.data
			};
		case SET_CATEGORY_FILTER:
			return {
				...state,
				categoryFilter: action.data
			};
		case SET_SORT_TYPE:
			return {
				...state,
				sortType: action.data
			};

		default:
			return state;
	}
}

export default groceryApp;
