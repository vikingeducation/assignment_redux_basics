import { combineReducers } from "redux";

//import action constants from action

import { ADD_ITEM } from "./actions";

//grocerylist reducers
//
//switch statement
function groceryListReducer(state = [], action) {
	switch (action.type) {
		// adds item to list
		case ADD_ITEM:
			return [...state, action.data];
		//set purchased to true for matched item
		default:
			return state;
	}
}
//set filter reducers
//
//purchased
//not purchased
//all
//categories

//sortList reducers
//

//combine reducers
export const groceriesApp = combineReducers({
	groceryListReducer
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
