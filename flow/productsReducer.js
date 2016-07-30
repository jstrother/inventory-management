const initialState = {};

const productsReducer = (state = state || initialState, action) => {
	const productsIndex = () => {
		return state.findIndex(thisProducts => {
			return thisProducts && thisProducts.id === action.products.id;
		});
	};
	switch (action.type) {

		default:
			return state;
	}
};

export default productsReducer;