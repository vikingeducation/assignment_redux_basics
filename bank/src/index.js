import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';

import { accountsApp } from './reducers';

import { createAccount } from './actions.js';

let store = createStore(accountsApp);

let unsubscribe = store.subscribe(() => {
  console.log('unsubscribe', store.getState());
});

console.log('initial state', store.getState());

store.dispatch(
  createItem({
    name: 'Edwin',
    amount: 15,
    date: Date.now()
  })
);

console.log('Whole Milk Added', store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
