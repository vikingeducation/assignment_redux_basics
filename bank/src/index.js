import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {createStore} from 'redux';
import {bankApp} from './reducers';
import {
  selectAccount,
  depositMoney,
  withdrawMoney,
  transferMoney,
  setTransactionFilter
} from './actions';

let store = createStore(bankApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log('initial state', store.getState());

store.dispatch(selectAccount(3));

store.dispatch(depositMoney({
  amount: 1000,
  owner: 3
}));

store.dispatch(withdrawMoney({
  amount: 2500,
  owner: 17
}));

store.dispatch(transferMoney({
  amount: 2500,
  owner: 6,
  sender: 7
}));

store.dispatch(setTransactionFilter({
  START: "MAR-19-2015",
  END: "MAY-29-2016"
}));

unsubscribe();

ReactDOM.render(<App />, document.getElementById('root'));
