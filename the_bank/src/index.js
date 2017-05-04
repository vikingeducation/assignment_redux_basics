import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';



state: {
	accounts: [
		{
			id: 1,
			amount: 1000
		}
	],
	transactions: [
		{
			id: 1,
			amount: 20,
			type: "withdraw",
			from: 2,
			to: null
		}
	]
}

state: {
	accounts: [
		{
			id: 1,
			amount: 1000,
			transactions: [
				{
					id: 1,
					amount: 20,
					type: "withdraw",
					from: null,
					to: null
				}
			]			
		}
	],

}









ReactDOM.render(
  <App />,
  document.getElementById('root')
);
