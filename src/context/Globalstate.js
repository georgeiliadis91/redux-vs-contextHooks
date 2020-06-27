import React, { createContext, useReducer } from 'react';
import { cartReducer } from './reducers';
import { addProductAction, removeProductAction } from './actions';

export const CartContext = createContext();

export default function Globalstate(props) {
	const [cart, dispatch] = useReducer(cartReducer, []);

	const addProduct = (id) => {
		console.log('clicked');
		dispatch(addProductAction(id));
	};

	const removeProduct = (id) => {
		dispatch(removeProductAction(id));
	};

	return (
		<CartContext.Provider value={{ cart, addProduct, removeProduct }}>
			{props.children}
		</CartContext.Provider>
	);
}
