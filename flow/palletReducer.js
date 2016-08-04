// imported into reducers.js

import {PALLET_DATA, PALLET_INSERT, PALLET_UPDATE, PALLET_DELETE} from './reduxFlowVariables.js';

const palletReducer = (state = [], action) => {
	const palletIndex = () => {
		return state.findIndex(thisPallet => {
			return thisPallet && thisPallet.id === action.pallet.id;
		});
	};
	switch (action.type) {
		case PALLET_DATA:
			if (action.pallet !== state.pallet) {
				return [...action.pallet, ...state];
			}

		case PALLET_INSERT:
			return palletIndex() < 0 ? [...state, action.pallet] : state;

		case PALLET_UPDATE:
			let palletUpdateIndex = palletIndex();
			if (palletUpdateIndex > -1) {
				let updatedPallet = Object.assign({}, state[palletUpdateIndex], action.pallet);
				return [...state.slice(0, palletUpdateIndex), updatedPallet, ...state.slice(palletUpdateIndex + 1)];
			}
			else {
				return state;
			}

		case PALLET_DELETE:
			let palletDeleteIndex = palletIndex();
			if (palletDeleteIndex > -1) {
				return [...state.slice(0, palletDeleteIndex), ...state.slice(palletDeleteIndex + 1)];
			}
			else {
				return state;
			}

		default:
			return state;
	}
};

export default palletReducer;