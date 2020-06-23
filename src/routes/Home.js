import React from 'react';
import { Link } from 'react-router-dom';

const products = [
	{ id: 1, name: 'lg', price: 50 },
	{ id: 2, name: 'samsung', price: 100 },
	{ id: 3, name: 'phillips', price: 50 },
];

export default function Home({ prodCart, setProdCart }) {
	const addItem = (id) => {
		let arr = prodCart;
		let found = false;

		arr.forEach((element, index) => {
			if (element.id === id) {
				element.amount++;
				found = true;
			}
		});

		if (!found) {
			arr = [...arr, { id: id, amount: 1 }];
		}

		setProdCart(arr);
	};

	return (
		<div>
			<Link to="/cart">
				<button>Cart</button>
			</Link>
			<h2>Home</h2>
			<ul>
				{products.map((product, index) => {
					return (
						<li key={index}>
							{product.name} -
							<button onClick={() => addItem(product.id)}>Add</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
