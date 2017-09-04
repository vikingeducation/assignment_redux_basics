import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import {
  createAccount,
  deposit,
  withdraw,
  viewAccount,
  transfer
} from "./actions";
import account from "./reducers";

let store = createStore(account);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  createAccount({
    owner: "Greg Filipczak",
    amount: 20,
    viewing: false,
    transfers: []
  })
);

store.dispatch(
  createAccount({
    owner: "Della Bro",
    amount: 200,
    viewing: false,
    transfers: []
  })
);

store.dispatch(
  createAccount({
    owner: "Lyra Flynn",
    amount: 5000000,
    viewing: false,
    transfers: []
  })
);

store.dispatch(
  deposit({
    id: 2,
    amount: 2500
  })
);

store.dispatch(
  withdraw({
    id: 1,
    amount: 15
  })
);

store.dispatch(
  transfer({
    id: 3,
    amount: 1000,
    recipient: 2
  })
);

store.dispatch(
  transfer({
    id: 3,
    amount: 1000,
    recipient: 1
  })
);

store.dispatch(
  transfer({
    id: 1,
    amount: 1000,
    recipient: 3
  })
);

store.dispatch(viewAccount(1));

const addUser = e => {
  e.preventDefault();
  let name = document.getElementById("name");
  let amount = document.getElementById("amount");
  name = name.value;
  amount = name.amount;
  store.dispatch(
    createAccount({
      owner: name,
      amount: amount,
      viewing: false,
      transfers: []
    })
  );
};

unsubscribe();

ReactDOM.render(
  <App value={store.getState()} store={store} onSubmit={addUser} />,
  document.getElementById("root")
);
registerServiceWorker();
