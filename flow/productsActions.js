// imported into productsReducers.js

import {PRODUCTS_DATA, PRODUCTS_INSERT, PRODUCTS_UPDATE, PRODUCTS_DELETE} from './reduxFlowVariables.js';

export const productsData = data => {
	return {
		type: PRODUCTS_DATA,
		products: data
	};
};

export const newProducts = products => {
	return {
		type: PRODUCTS_INSERT,
		products: products
	};
};

export const updateProducts = products => {
	return {
		type: PRODUCTS_UPDATE,
		products: products
	};
};

export const deleteProducts = products => {
	return {
		type: PRODUCTS_DELETE,
		products: products
	};
};