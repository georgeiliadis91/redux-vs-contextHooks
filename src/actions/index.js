export const addProduct = (data) => {
	return {
		type: 'ADD_PRODUCT',
		payload: data,
	};
};

export const removeProduct = (data) => {
	return {
		type: 'REMOVE_PRODUCT',
		payload: data,
	};
};
