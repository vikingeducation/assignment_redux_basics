import { createStore } from "redux";
import { groceriesApp } from "./reducers";

const store = createStore(groceriesApp);

store.subscribe(() => {
  console.log(store.getState());
});

console.log("initial state", store.getState());

export default store;
