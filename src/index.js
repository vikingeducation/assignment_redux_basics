import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, combineReducers } from "redux";

let store = createStore(groceryApp);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
