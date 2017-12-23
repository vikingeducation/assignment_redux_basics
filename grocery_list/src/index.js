import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { groceryItemsApp } from './reducers';
import {
  createItem,
  buyItem,
  updateItem,
  setPurchasedFilter,
  setCategoryFilter,
  setSortBy
} from './actions';

const itemStore = createStore(groceryItemsApp);

const unsubscribe = itemStore.subscribe(() => {
  console.log('current state', itemStore.getState());
});

console.log('initial state', itemStore.getState());

itemStore.dispatch(createItem({
  name: 'peas',
  description: "for tuna fish caserole",
  amount: '$3.99',
  category: 'Frozen Section',
  purchased: false
}));

itemStore.dispatch(createItem({
  name: 'chicken',
  description: "Dinner for Thursday",
  amount: '$7.99',
  category: 'Poultry',
  purchased: false
}));

itemStore.dispatch(createItem({
  name: 'Turkey',
  description: "Thanksgiving is coming!",
  amount: '$24.99',
  category: 'Poultry',
  purchased: false
}));

itemStore.dispatch(buyItem(2));

itemStore.dispatch(updateItem({
  id: 2,
  description: "Dinner for Wednesday",
  amount: "$6.99"
}));

itemStore.dispatch(setPurchasedFilter('PURCHASED'));
itemStore.dispatch(setCategoryFilter('Poultry'));
itemStore.dispatch(setSortBy('NAME'));


unsubscribe();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
