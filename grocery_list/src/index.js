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
const getItems = (category = 'all', filter) => {
	let items = store.getState().items;

	if (category !== 'all') {
		category = category.toLowerCase();
		items = items.filter(item => item.category.toLowerCase() === category);
	}

	if (filter && typeof filter === 'function') {
		items = items.filter(filter);
	}

	const returnObj = {
		print: () => items.forEach(item => console.log(item)),
		sort: type => {
			if (typeof type === 'string') {
				switch (type) {
					case SORT_NAME:
						items = items.sort(
							(a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
						);
						break;
					case SORT_DESC:
						items = items.sort(
							(a, b) => (a.desc < b.desc ? -1 : a.desc > b.desc ? 1 : 0)
						);
						break;
				}
			} else if (typeof type === 'function') items = items.sort(type);
			else items = items.sort();
			return returnObj;
		}
	};
	return returnObj;
};

getItems('kids').print();
getItems('all', el => el.amount > 5).sort('name').print();
getItems('kids', el => el.purchased)
	.sort((a, b) => a.amount - b.amount)
	.print();
getItems('all', el => el.purchased).print();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
