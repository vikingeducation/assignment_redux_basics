import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { groceryApp } from './reducers'
import { addItem, purchaseItem, setCategoryFilter, setPurchasedFilter } from './actions'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(groceryApp)

let unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addItem({
  name: 'Grapes',
  description: 'Green?',
  amount: 3,
  category: 'Fruit'
}))

store.dispatch(addItem({
  name: 'Milk',
  description: 'Regular',
  amount: 1,
  category: 'Dairy'
}))

store.dispatch(purchaseItem('Grapes'))

store.dispatch(setPurchasedFilter('Purchased'))

store.dispatch(setCategoryFilter('NAME'))

unsubscribe()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
