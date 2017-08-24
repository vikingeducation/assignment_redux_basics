import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import groceryApp from "./reducers";
import { addItem } from "./actions";

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

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
