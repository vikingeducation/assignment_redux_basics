import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createAccount, deposit, withdraw, transfer } from './actions';

import bankApp from './reducers';
import { createStore, compose } from 'redux';

import faker from 'faker';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(bankApp, composeEnhancers());
const unsubscribe = store.subscribe(() => {
	//console.log(store.getState());
});

console.log('initial state: ', store.getState());
for (let i = 0; i < 5; i++) {
	store.dispatch(
		createAccount({
			name: faker.name.firstName()
		})
	);

	store.dispatch(
		deposit({
			accountId: i + 1,
			amount: Math.floor(1 + Math.random() * 1000),
			date: new Date(faker.date.past()).toJSON()
		})
	);
}
console.log('state: ', store.getState());

for (let i = 0; i < 5; i++) {
	store.dispatch(
		withdraw({
			accountId: i + 1,
			amount: 50
		})
	);
}

for (let i = 1; i < 5; i++) {
	store.dispatch(
		transfer({
			fromAccountId: 1,
			toAccountId: i + 1,
			amount: 100,
			date: new Date(faker.date.past()).toJSON()
		})
	);
}

const getTransactions = (startDate, endDate, accountId) => {
	const accounts = store.getState().accounts;
	const transactions = accounts.find(account => {
		return account.id === accountId;
	}).transactions;

	if (!transactions) return [];

	return transactions.filter(transaction => {
		return (
			transaction.data.date >= startDate && transaction.data.date <= endDate
		);
	});
};

console.log(
	'transactions',
	getTransactions('2015-01-01T21:40:43.461Z', '2019-05-01T21:40:43.461Z', 1)
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
