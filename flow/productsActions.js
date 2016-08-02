// imported into productsReducers.js

export const PRODUCTS_INSERT = 'products:insert';
export const newProducts = products => {
	return {
		type: PRODUCTS_INSERT,
		products: products
	};
}

export const PRODUCTS_UPDATE = 'products:update';
export const updateProducts = products => {
	return {
		type: PRODUCTS_UPDATE,
		products: products
	};
}

export const PRODUCTS_DELETE = 'products:delete';
export const deleteProducts = products => {
	return {
		type: PRODUCTS_DELETE,
		products: products
	};
}