import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { bankApp } from './reducers';
import {
  createAccount,
  deposit,
  withdraw,
  transfer,
  selectAccount,
  filterByDate
} from './actions';

export const store = createStore(bankApp);

const unsubscribe = store.subscribe(() => {
  console.log('current state', store.getState());
});

console.log('initial state', store.getState());

store.dispatch(createAccount({
  customer: 'John Doe',
  balance: 287600,
  start_data: new Date()
}));

store.dispatch(createAccount({
  customer: 'Jane Doe',
  balance: 346600,
  start_data: new Date(1995, 11, 17)
}));

store.dispatch(createAccount({
  customer: 'Sarah Johnson',
  balance: 1463400,
  start_data: new Date(2001, 11, 29)
}));

store.dispatch(deposit({
  id: 2,
  amount: 10000
}));

store.dispatch(withdraw({
  id: 2,
  amount: 10000
}));

store.dispatch(transfer({
  from: 2,
  to: 1,
  amount: 10000
}));

store.dispatch(selectAccount(2));

store.dispatch(filterByDate({
  start: new Date(2000, 11, 17),
  end: new Date(2001, 11, 17)
}));

unsubscribe();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
