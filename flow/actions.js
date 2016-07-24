// called into reducers.js

const CREATE_PALLET = 'CREATE_PALLET';
const createPallet = () => {
	return {
		type: CREATE_PALLET
	};
};

const UPDATE_PALLET = 'UPDATE_PALLET';
const updatePallet = (quantity) => {
	return {
		type: UPDATE_PALLET,
		quantity
	};
};

const SELECT_RACK = 'SELECT_RACK';
const selectRack = (rackId) => {
	return {
		type: SELECT_RACK,
		rackId
	};
};

const SET_PALLET_LOCATION = 'SET_PALLET_LOCATION';
const setPalletLocation = (palletId, locationId) => {
	return {
		type: SET_PALLET_LOCATION,
		pallet,
		location
	};
};

exports.CREATE_PALLET = CREATE_PALLET;
exports.createPallet = createPallet;
exports.SELECT_RACK = SELECT_RACK;
exports.selectRack = selectRack;
exports.SET_PALLET_LOCATION = SET_PALLET_LOCATION;
exports.setPalletLocation = setPalletLocation;