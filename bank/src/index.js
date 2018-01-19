import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux'
import {accountOperationsApp} from './reducers'
import {createAccount,
        checkAccount,
        depositMoney,
        withdrawMoney,
        transferMoney,
        setFilterTransactions} from './actions'

let store = createStore(accountOperationsApp)

let unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

console.log('initial state', store.getState())
store.dispatch(createAccount({
  name: 'Sarah Quinn',
  accountNo: '1234',
  balance: 100,
  createAt: new Date()
}))

store.dispatch(createAccount({
  name: 'Henry Kissinger',
  accountNo: '5845',
  balance: 10,
  createAt: new Date()
}))

store.dispatch(createAccount({
  name: 'Emmanuel Sussex',
  accountNo: '6000',
  balance: 500,
  createAt: new Date()
}))

// store.dispatch(checkAccount('6000'))

store.dispatch(depositMoney({
  accountNo: '1234',
  value: 1000
}))

store.dispatch(withdrawMoney({
  accountNo: '1234',
  value: 111
}))

store.dispatch(transferMoney({
  acc1: '6000',
  acc2: '1234',
  value: 450
}))

store.dispatch(setFilterTransactions({
  startDate: new Date(2000, 0, 1),
  endDate: new Date(2018, 0, 1)
}))


unsubscribe()




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
