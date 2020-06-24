import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/Globalstate';


const products = [
	{ id: 1, name: 'lg', price: 50 },
	{ id: 2, name: 'samsung', price: 100 },
	{ id: 3, name: 'phillips', price: 50 },
];

export default function Home() {
	const { addProduct } = useContext(CartContext);

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
							<button onClick={() => addProduct(product.id)}>Add</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
