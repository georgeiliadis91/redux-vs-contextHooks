import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';

//Initiating store, using Debug
const globalStore = createStore(
	allReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Provider store={globalStore}>
				<App />
			</Provider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
