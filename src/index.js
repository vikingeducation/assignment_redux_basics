import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';

import {
  addGrocery,
  purchaseGrocery,
  updateGrocery,
  setPurchasedFilter,
  setSortGrocery
} from './actions';

let store = createStore(groceryApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log('initial state', store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
