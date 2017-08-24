import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createAccount, deposit, withdraw, transfer } from "./actions";

console.log(
  createAccount({
    name: "Harry"
  })
);

// console.log(withdraw({
//   from:
//
// })
console.log(
  deposit({
    from: 1,
    to: 2,
    amount: 100
  })
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
