import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux'
import groceryApp from './reducers'

// For this Redux application, develop the following features. Use subscribe() to simply log each action to the console. Create your store and dispatch your actions from the src/index.js file.
//
// As a user, I want to...
//
// Add a new item to my grocery list. The item should have a name/description and optional fields for amount and category.
// Indicate an item has been purchased.
// Set filters for purchased/not purchased/all, categories/all.
// Set sort by name/description.

let store = createStore(groceryApp)

let unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})
console.log('initial state', store.getState())

unsubscribe()



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
