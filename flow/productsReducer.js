// imported into reducers.js

import {PRODUCTS_DATA, PRODUCTS_INSERT, PRODUCTS_UPDATE, PRODUCTS_DELETE} from './reduxFlowVariables.js';

const productsReducer = (state = [], action) => {
	const productsIndex = () => {
		return state.findIndex(thisProducts => {
			return thisProducts && thisProducts.id === action.products.id;
		});
	};
	switch (action.type) {
		case PRODUCTS_DATA:
			return [...action.products, ...state];

		case PRODUCTS_INSERT:
			return productsIndex() > 0 ? [...state, action.products] : state;

		case PRODUCTS_UPDATE:
			let productsUpdateIndex = productsIndex();
			if (productsUpdateIndex > -1) {
				let updatedProducts = Object.assign({}, state[productsUpdate], action.products);
				return[...state.slice(0, productsUpdateIndex), updatedProducts, ...state.slice(productsUpdateIndex + 1)];
			}
			else {
				return state;
			}

		case PRODUCTS_DELETE:
			let productsDeleteIndex = productsIndex();
			if (productsDeleteIndex > -1) {
				return [...state.slice(0, productsDeleteIndex), ...state.slice(productsDeleteIndex + 1)];
			}
			else {
				return state;
			}

		default:
			return state;
	}
};

export default productsReducer;