// imported into reducers.js

import {PALLET_DATA, PALLET_INSERT, PALLET_UPDATE, PALLET_DELETE} from './reduxFlowVariables.js';
import {palletData, newPallet, updatePallet, deletePallet} from './palletActions.js';

const palletReducer = (state = [], action) => {
	console.log('palletReducer action', action);
	const palletIndex = () => {
		return state.findIndex(thisPallet => {
			return thisPallet && thisPallet.id === action.pallet.id;
		});
	};
	switch (action.type) {
		case PALLET_DATA:
			console.log('PALLET_DATA');
			// is the following even right?
			let palletDataIndex = palletIndex();
			if (palletDataIndex > -1) {
				let dataPallet = Object.assign({}, state[palletDataIndex], action.pallet);
				return [dataPallet, ...state];
			}
			else {
				return state;
			}

		case PALLET_INSERT:
			console.log('PALLET_INSERT');
			return palletIndex() < 0 ? [...state, action.pallet] : state;

		case PALLET_UPDATE:
			console.log('PALLET_UPDATE');
			let palletUpdateIndex = palletIndex();
			if (palletUpdateIndex > -1) {
				let updatedPallet = Object.assign({}, state[palletUpdateIndex], action.pallet);
				return [...state.slice(0, palletUpdateIndex), updatedPallet, ...state.slice(palletUpdateIndex + 1)];
			}
			else {
				return state;
			}

		case PALLET_DELETE:
			console.log('PALLET_DELETE');
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