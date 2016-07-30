const initialState = {};

const productReducer = (state = state || initialState, action) => {
	const productIndex = () => {
		return state.findIndex(thisProduct => {
			return thisProduct && thisProduct.id === action.product.id;
		});
	};
	switch (action.type) {

		default:
			return state;
	}
};

export default productReducer;