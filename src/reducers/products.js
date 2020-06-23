const productReducer = (state = null, action) => {
	switch (action.type) {
		case 'ADD_PRODUCT': {
			state = action.payload;
			return state;
		}
		case 'REMOVE_PRODUCT': {
			state = action.payload;
			return state;
		}
		default:
			return state;
	}
};

export default productReducer;
