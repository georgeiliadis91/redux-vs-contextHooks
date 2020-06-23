import React, { Fragment, useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Cart from './routes/Cart';
import Home from './routes/Home';

function App() {
	const [prodCart, setProdCart] = useState([]);
	return (
		<Fragment>
			<Switch>
				<Route path="/cart">
					<Cart prodCart={prodCart} setProdCart={setProdCart} />
				</Route>
				<Route path="/">
					<Home prodCart={prodCart} setProdCart={setProdCart} />
				</Route>
			</Switch>
		</Fragment>
	);
}

export default App;
