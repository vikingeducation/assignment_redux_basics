import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import AppContainer from "./AppContainer";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import { Provider } from "react-redux";
const app = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
