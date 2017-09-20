import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import {
	selectAccount,
	depositToAccount,
	withdrawFromAccount,
	transfer,
	setFilterStart,
	setFilterEnd
} from "./actions";
import {bankApp} from "./reducers"

const store = createStore(bankApp);

let unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(selectAccount(2));

store.dispatch(depositToAccount(1, 100000000));

store.dispatch(withdrawFromAccount(3, 50));

store.dispatch(transfer({ from: 1, to: 3, amount: 500 }));

store.dispatch(setFilterStart(new Date(2000, 3, 6)));

store.dispatch(setFilterEnd(new Date(2018, 0, 1)));

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
