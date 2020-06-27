export const addProductAction = (data) => {
	return {
		type: 'ADD_PRODUCT',
		payload: data,
	};
};

export const removeProductAction = (data) => {
	return {
		type: 'REMOVE_PRODUCT',
		payload: data,
	};
};
