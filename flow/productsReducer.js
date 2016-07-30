const initialState = {};

const productsReducer = (state = state || initialState, action) => {
	const productsIndex = () => {
		return state.findIndex(thisProducts => {
			return thisProducts && thisProducts.id === action.products.id;
		});
	};
	switch (action.type) {
		case 'products:insert':
			return productsIndex() > 0 ? [...state, action.products] : state;

		case 'products:update':
			let productsUpdate = productsIndex();
			if (productsUpdate > -1) {
				let updatedProducts = Object.assign({}, state[productsUpdate], action.products);
				return[...state.slice(0, productsUpdate), updatedProducts, ...state.slice(productsUpdate + 1)];
			}
			else {
				return state;
			}

		case 'products:delete':
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