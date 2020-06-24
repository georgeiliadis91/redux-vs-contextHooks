import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions';

export const cartReducer = (state, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return addItem(state, action.payload);
		case REMOVE_PRODUCT:
			return removeItem(state, action.payload);
		default:
			return state;
	}
};

//FUNCTIONS
const addItem = (state, id) => {
	let found = false;

	state.forEach((element, index) => {
		if (element.id === id) {
			element.amount++;
			found = true;
		}
	});

	if (!found) {
		state = [...state, { id: id, amount: 1 }];
	}

	return state;
};

const removeItem = (state, id) => {
	const data = state.filter((product) => {
		return product.id !== id;
	});

	return data;
};
