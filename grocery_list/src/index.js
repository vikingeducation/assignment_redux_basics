import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { addItem, purchaseItem } from './actions';

import groceryListApp from './reducers';
import { createStore } from 'redux';

import faker from 'faker';

const store = createStore(groceryListApp);

let unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

console.log('initial state: ', store.getState());

for (let i = 0; i < 1000; i++) {
	store.dispatch(
		addItem({
			name: faker.commerce.productName(),
			category: faker.commerce.department(),
			amount: Math.floor(1 + Math.random() * 10)
		})
	);
	const purchased = !!Math.round(Math.random());
	if (purchased) {
		store.dispatch(purchaseItem(i + 1));
	}
}

const SORT_NAME = 'SORT_NAME';
const SORT_DESC = 'SORT_DESC';
const listItems = (category, filter) => {
	const items = store
		.getState()
		.items.filter(
			item =>
				category === 'all'
					? true
					: item.category.toLowerCase() === category.toLowerCase()
		)
		.filter(filter && typeof filter === 'function' ? filter : () => true);
	items.forEach(item => console.log(item));
	return {
		sort: type => {
			if (typeof type === 'string') {
				switch (type) {
					case SORT_NAME:
						break;
					case SORT_DESC:
						break;
				}
			} else if (typeof type === 'function') {
			} else {
				return items.sort();
			}
		}
	};
};

listItems('kids');
listItems('all', el => el.amount > 5);

listItems('all', el => el.purchased);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
