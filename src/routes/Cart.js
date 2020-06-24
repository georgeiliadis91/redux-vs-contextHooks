import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/Globalstate';

export default function Cart() {
	const { cart, removeProduct } = useContext(CartContext);

	return (
		<div>
			<Link to="/">
				<button>Home</button>
			</Link>
			<h2>Cart</h2>
			<ul>
				{cart.map((product, index) => {
					return (
						<li key={index}>
							ID: {product.id} - Amount: {product.amount} -
							<button onClick={() => removeProduct(product.id)}>Remove</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
