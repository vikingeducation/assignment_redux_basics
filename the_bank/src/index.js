import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { createStore } from "redux";

let unsubscribe = store.subscribe(() => {
  // Log the new state to the console
  console.log(store.getState());
});

console.log("initial state", store.getState());

// state: {
// 	accounts: [
// 		{
// 			id: 1,
// 			amount: 1000
// 		}
// 	],
// 	transactions: [
// 		{
// 			id: 1,
// 			date: 11/11/11
// 			amount: 20,
// 			type: "withdraw",
// 			from: 2,
// 			to: null
// 		}
// 	]
// }

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
