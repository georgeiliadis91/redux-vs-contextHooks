import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Globalstate from './context/Globalstate';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Globalstate>
				<App />
			</Globalstate>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
