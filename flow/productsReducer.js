// imported into reducers.js

import {PRODUCTS_INSERT, PRODUCTS_UPDATE, PRODUCTS_DELETE, newProducts, updateProducts, deleteProducts} from './productsActions.js';

const initialState = [];

const productsReducer = (state = state || initialState, action) => {
	const productsIndex = () => {
		return state.findIndex(thisProducts => {
			return thisProducts && thisProducts.id === action.products.id;
		});
	};
	switch (action.type) {
		case PRODUCTS_INSERT:
			return productsIndex() > 0 ? [...state, action.products] : state;

		case PRODUCTS_UPDATE:
			let productsUpdate = productsIndex();
			if (productsUpdate > -1) {
				let updatedProducts = Object.assign({}, state[productsUpdate], action.products);
				return[...state.slice(0, productsUpdate), updatedProducts, ...state.slice(productsUpdate + 1)];
			}
			else {
				return state;
			}

		case PRODUCTS_DELETE:
			let productsDelete = productsIndex();
			if (productsDelete > -1) {
				return [...state.slice(0, productsDelete), ...state.slice(productsDelete + 1)];
			}
			else {
				return state;
			}

		default:
			return state;
	}
};

export default productsReducer;