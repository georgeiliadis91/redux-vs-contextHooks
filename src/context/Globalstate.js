import React, { createContext, useReducer } from 'react';
import { cartReducer } from './reducers';
import { ADD_PRODUCT, REMOVE_PRODUCT } from './actions';

export const CartContext = createContext();

export default function Globalstate(props) {
	const [cart, dispatch] = useReducer(cartReducer, []);

	const addProduct = (id) => {
		dispatch({ type: ADD_PRODUCT, payload: id });
	};

	const removeProduct = (id) => {
		dispatch({ type: REMOVE_PRODUCT, payload: id });
	};

	return (
		<CartContext.Provider value={{ cart, addProduct, removeProduct }}>
			{props.children}
		</CartContext.Provider>
	);
}
