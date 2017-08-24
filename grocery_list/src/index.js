import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import groceryApp from "./reducers";
import {
	addItem,
	purchaseItem,
	setPurchasedFilter,
	setCategoryFilter,
	setSortType
} from "./actions";

const store = createStore(groceryApp);

let unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(
	addItem({
		name: "milk",
		description: "it is made of milk",
		amount: 1,
		category: "dairy",
		purchased: false
	})
);

store.dispatch(
	addItem({
		name: "bread",
		description: "whole wheat bread with no crust somehow",
		amount: 4,
		category: "bakery",
		purchased: false
	})
);

store.dispatch(
	addItem({
		name: "cheese",
		description: "it is also made of milk",
		amount: 17,
		category: "dairy",
		purchased: false
	})
);

store.dispatch(purchaseItem(2));

store.dispatch(setPurchasedFilter("PURCHASED"));

store.dispatch(setCategoryFilter("dairy"));

store.dispatch(setSortType("description"));

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
