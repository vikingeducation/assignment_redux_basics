import { combineReducers } from "redux";

import { DEPOSIT, ADD_ACCOUNT } from "./actions";

function accountReducer(state = [], action) {
	switch (action.type) {
		case ADD_ACCOUNT:
			return [...state, action.data];
		default:
			return state;
	}
}
//Name:
//Account:
//   checking: amount
//   savings: amount
//Transaction:
//          to:
//          from:
//          amount:
//          date:
//
//

export const bankApp = combineReducers({
	accountReducer
});
