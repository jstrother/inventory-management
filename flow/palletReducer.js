// imported into reducers.js

const initialState = [];

const palletReducer = (state = state || initialState, action) => {
	console.log(action);
	const palletIndex = () => {
		return state.findIndex(thisPallet => {
			return thisPallet && thisPallet.id === action.pallet.id;
		});
	};
	switch (action.type) {
		case 'pallet:insert':
			return palletIndex() < 0 ? [...state, action.pallet] : state;

		case 'pallet:update':
			let palletUpdate = palletIndex();
			if (palletUpdate > -1) {
				let updatedPallet = Object.assign({}, state[palletUpdate], action.pallet);
				return [...state.slice(0, palletUpdate), updatedPallet, ...state.slice(palletUpdate + 1)];
			}
			else {
				return state;
			}

		case 'pallet:delete':
			let palletDelete = palletIndex();
			if (palletDelete > -1) {
				return [...state.slice(0, palletDelete), ...state.slice(palletDelete + 1)];
			}
			else {
				return state;
			}

		case 'pallet:data':
			console.log(action.pallet);

		default:
			return state;
	}
};

export default palletReducer;