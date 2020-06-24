import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../actions';

export default function Cart() {
	const dispatch = useDispatch();

	const products = useSelector((state) => {
		return state.products;
	});

	const removeItem = (id) => {
		dispatch(removeProduct(id));
	};

	return (
		<div>
			<Link to="/">
				<button>Home</button>
			</Link>
			<h2>Cart</h2>
			<ul>
				{products.map((product, index) => {
					return (
						<li key={index}>
							ID: {product.id} - Amount: {product.amount} -
							<button
								onClick={() => {
									removeItem(product.id);
								}}
							>
								Remove
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
