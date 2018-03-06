import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {bankApp} from "./reducers/accounts_reducer";
import {createAccount} from "./actions/accounts";
import {
  makeDeposit, makeTransfer,
  makeWithdrawal
} from "./actions/transactions";

let bankStore = createStore(bankApp);
console.log('Initial state: ', bankStore.getState());

let unsubscribe = bankStore.subscribe(() => {
  console.log('Bank state: ', bankStore.getState());
});

bankStore.dispatch(createAccount({
  owner: 'Joe Seephus',
  balance: 0,
}));

bankStore.dispatch(createAccount({
  owner: 'Sally Strawberry',
  balance: 100,
}));

bankStore.dispatch(makeDeposit(100, 1));
bankStore.dispatch(makeDeposit(25, 1));
bankStore.dispatch(makeWithdrawal(50, 1));

bankStore.dispatch(makeTransfer(1, 2, 25));

unsubscribe();


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
