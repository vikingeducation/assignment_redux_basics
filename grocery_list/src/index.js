import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';

import { itemsApp } from './reducers';

import {
  createItem,
  purchaseItem,
  updateItem,
  setAvailabilityFilter
} from './actions.js';

let store = createStore(itemsApp);

let unsubscribe = store.subscribe(() => {
  console.log('unsubscribe', store.getState());
});

console.log('initial state', store.getState());

store.dispatch(
  createItem({
    name: 'Milk',
    description: 'whole milk',
    amount: 15,
    category: 'Diary',
    available: true
  })
);

console.log('next state', store.getState());

store.dispatch(
  createItem({
    name: 'Cookies',
    description: 'lorem',
    amount: 1,
    category: 'Snacks',
    available: false
  })
);

console.log('next state', store.getState());

store.dispatch(purchaseItem(3));

store.dispatch(
  updateItem({
    id: 2,
    name: 'Cookies',
    amount: 3,
    available: true
  })
);

console.log('next state', store.getState());

store.dispatch(setAvailabilityFilter('SHOW_PURCHASED'));

unsubscribe();

ReactDOM.render(<App />, document.getElementById('root'));
