const initialState = {};

const palletReducer = (state = state || initialState, action) => {
	const palletIndex = () => {
		return state.findIndex(thisPallet => {
			return thisPallet && thisPallet.id === action.pallet.id;
		});
	};
	switch (action.type) {

		default:
			return state;
	}
};

export default palletReducer;