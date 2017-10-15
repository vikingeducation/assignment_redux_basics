import { combineReducers } from "redux";

//import action constants from action

import { ADD_ITEM, PURCHASED, FILTER, SORT_BY_NAME } from "./actions";

//grocerylist reducers
//
//switch statement
function groceryListReducer(state = [], action) {
	switch (action.type) {
		// adds item to list
		case SORT_BY_NAME:
			if (state.length < 1) {
				return state;
			} else {
				state.sort((a, b) => {
					a = a.name;
					b = b.name;
					return a < b ? -1 : a > b ? 1 : 0;
				});
			}
		case ADD_ITEM:
			return [...state, action.data];
		//set purchased to true for matched item
		case PURCHASED:
			return state.map((item, i) => {
				if (action.data === item.id) {
					return {
						...item,
						status: true
					};
				} else {
					return item;
				}
			});
		default:
			return state;
	}
}
//set filter reducers
function filter(state = { filter: "all" }, action) {
	switch (action.type) {
		case FILTER:
			return {
				filter: action.filter
			};
		default:
			return state;
	}
}
//purchased
//not purchased
//all
//categories

//combine reducers
export const groceriesApp = combineReducers({
	groceryListReducer,
	filter
});
//shape of grocery list object

/*
filters: {
  all: 'All',
  purchased: 'Purchased',
  unpurchased: 'Unpurchased',
}

groceries_list: [
  {
    name: apples,
    description: diet,
    category: fruit,
    amount: 5,
  }
]
*/
