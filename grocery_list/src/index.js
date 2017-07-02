import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {createStore} from 'redux';
import {groceryListApp} from './reducers';
import {
  addProduct,
  updateProduct,
  setPurchasedFilter,
  setCategoryFilter,
  setSortFilter
} from './actions';

let store = createStore(groceryListApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log('initial state', store.getState());

store.dispatch(addProduct({
  name: 'Bananas',
  description: 'It\'s very yellow...',
  amount: 5,
  category: 'produce',
  purchased: false
}));

store.dispatch(addProduct({
  name: 'Hair Gel',
  description: 'Rather goopy!',
  amount: 1,
  category: 'beauty',
  purchased: true
}));

store.dispatch(addProduct({
  name: 'Strawberries',
  description: 'Mmmmm... strawberries...',
  purchased: false
}));

store.dispatch(updateProduct({
  id: 1,
  name: 'Bananas',
  description: 'It\'s EXTREMELY yellow...',
  amount: 2,
  category: 'produce',
  purchased: true
}));

store.dispatch(setPurchasedFilter('SHOW_PURCHASED'));
store.dispatch(setCategoryFilter('SHOW_PRODUCE'));
store.dispatch(setSortFilter('SORT_BY_DESCRIPTION'));

unsubscribe();

ReactDOM.render(<App />, document.getElementById('root'));
