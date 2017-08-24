const initialState = {
	categoryFilter: "ALL",
	purchasedFilter: "ALL",
	items: []
};

const ADD_ITEM = "ADD_ITEM";

function groceryApp(state = initialState, action) {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				items: [...state.items, action.data]
			};
		default:
			return state;
	}
}

export default groceryApp;
