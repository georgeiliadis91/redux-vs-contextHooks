import productReducer from './products';

import { combineReducers } from 'redux';

const allReducer = combineReducers({
	products: productReducer,
});

export default allReducer;
