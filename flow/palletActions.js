// imported into palletReducer.js

import {PALLET_DATA, PALLET_INSERT, PALLET_UPDATE, PALLET_DELETE} from './reduxFlowVariables.js';

export const palletData = data => {
	return {
		type: PALLET_DATA,
		pallet: data
	};
};

export const newPallet = pallet => {
	return {
		type: PALLET_INSERT,
		pallet: pallet
	};
};

export const updatePallet = pallet => {
	return {
		type: PALLET_UPDATE,
		pallet: pallet
	};
};

export const deletePallet = pallet => {
	return {
		type: PALLET_DELETE,
		pallet: pallet
	};
};