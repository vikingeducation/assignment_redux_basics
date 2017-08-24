import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createAccount, deposit, withdraw, transfer } from './actions';

import bankApp from './reducers';
import { createStore } from 'redux';

import faker from 'faker';

const store = createStore(bankApp);
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
			amount: Math.floor(1 + Math.random() * 1000)
		})
	);
}
console.log('state: ', store.getState());

setTimeout(() => {
	for (let i = 0; i < 5; i++) {
		store.dispatch(
			withdraw({
				accountId: i + 1,
				amount: 50
			})
		);
	}
	console.log('state: ', store.getState());
}, 3000);

setTimeout(() => {
	for (let i = 1; i < 5; i++) {
		store.dispatch(
			transfer({
				fromAccountId: 1,
				accountId: i + 1,
				amount: 100
			})
		);
	}
	console.log('state: ', store.getState());
}, 6000);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
