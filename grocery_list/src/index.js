import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { addItem, purchaseItem } from './actions';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
