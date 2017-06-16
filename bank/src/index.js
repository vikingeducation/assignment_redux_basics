import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { bank } from './reducers';
import { setAccount, deposit, withdraw, transfer, filter } from './actions';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(bank)

let unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(setAccount(1))
store.dispatch(withdraw(400))
store.dispatch(deposit(500))
store.dispatch(setAccount(3))
store.dispatch(transfer(1, 1000))
store.dispatch(filter(new Date('6/15/2017'), new Date('7/17/2017')))

unsubscribe()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
