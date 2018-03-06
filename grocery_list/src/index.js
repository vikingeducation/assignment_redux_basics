import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {groceryListApp} from "./reducers";
import {
  addItem, purchaseItem, setCategoryFilter, setPurchaseFilter,
  setSortFilter
} from "./actions";

let store = createStore(groceryListApp);
let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log('Initial state: ', store.getState());

store.dispatch(addItem({
  name: 'bananas',
  description: 'Squishy things in yellow suits',
  cost: null,
  category: null,
  purchased: false,
}));

store.dispatch(addItem({
  name: 'apples',
  description: 'How you like dem?',
  cost: null,
  category: null,
  purchased: false,
}));

store.dispatch(purchaseItem(1));

store.dispatch(setCategoryFilter('SHOW_FRUIT'));

store.dispatch(setPurchaseFilter('PURCHASED'));
store.dispatch(setPurchaseFilter('NOT_PURCHASED'));

store.dispatch(setSortFilter('DESCRIPTION'));
store.dispatch(setSortFilter('NAME'));

unsubscribe();


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
