// imported into palletReducer.js

export const PALLET_DATA	= 'pallet:data';
export const palletData = pallet => {
	return {
		type: PALLET_DATA,
		pallet: pallet
	};
};

export const PALLET_INSERT = 'pallet:insert';
export const newPallet = pallet => {
	return {
		type: PALLET_INSERT,
		pallet: pallet
	};
};

export const PALLET_UPDATE = 'pallet:update';
export const updatePallet = pallet => {
	return {
		type: PALLET_UPDATE,
		pallet: pallet
	};
};

export const PALLET_DELETE = 'pallet:delete';
export const deletePallet = pallet => {
	return {
		type: PALLET_DELETE,
		pallet: pallet
	};
};