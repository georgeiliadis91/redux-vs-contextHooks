import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ prodCart, setProdCart }) {
	const removeItem = (id) => {
		const arr = prodCart.filter((product) => {
			return product.id !== id;
		});

		setProdCart(arr);
	};

	return (
		<div>
			<Link to="/">
				<button>Home</button>
			</Link>
			<h2>Cart</h2>
			<ul>
				{prodCart.map((product, index) => {
					return (
						<li key={index}>
							ID: {product.id} - Amount: {product.amount} -
							<button onClick={() => removeItem(product.id)}>Remove</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
