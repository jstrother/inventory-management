// imported into reducers.js

import {PRODUCTS_DATA, PRODUCTS_INSERT, PRODUCTS_UPDATE, PRODUCTS_DELETE} from './reduxFlowVariables.js';
import {productsData, newProducts, updateProducts, deleteProducts} from './productsActions.js';

const productsReducer = (state = [], action) => {
	console.log('productsReducer action', action);
	const productsIndex = () => {
		return state.findIndex(thisProducts => {
			return thisProducts && thisProducts.id === action.products.id;
		});
	};
	switch (action.type) {
		case PRODUCTS_DATA:
			console.log('PRODUCTS_DATA');
			// is the following even right?
			let productsDataIndex = productsIndex();
			if (productsDataIndex > -1) {
				let dataProducts = Object.assign({}, state[productsDataIndex], action.products);
				return [dataProducts, ...state];
			}
			else {
				return state;
			}

		case PRODUCTS_INSERT:
			console.log('PRODUCTS_INSERT');
			return productsIndex() > 0 ? [...state, action.products] : state;

		case PRODUCTS_UPDATE:
			console.log('PRODUCTS_UPDATE');
			let productsUpdateIndex = productsIndex();
			if (productsUpdateIndex > -1) {
				let updatedProducts = Object.assign({}, state[productsUpdate], action.products);
				return[...state.slice(0, productsUpdateIndex), updatedProducts, ...state.slice(productsUpdateIndex + 1)];
			}
			else {
				return state;
			}

		case PRODUCTS_DELETE:
			console.log('PRODUCTS_DELETE');
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