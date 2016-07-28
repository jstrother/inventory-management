// called into reducers.js

const CREATE_PALLET = 'CREATE_PALLET';
const createPallet = (type, expire, lot, numCases, numPops, numBars, country) => {
	return {
		type: CREATE_PALLET,
		type,
		expire,
		lot,
		numCases,
		numPops,
		numBars,
		country
	};
};

const UPDATE_PALLET = 'UPDATE_PALLET';
const updatePallet = (numCases, numPops, numBars) => {
	return {
		type: UPDATE_PALLET,
		numCases,
		numPops,
		numBars
	};
};

const SELECT_RACK = 'SELECT_RACK';
const selectRack = (rackId) => {
	return {
		type: SELECT_RACK,
		rack: rackId
	};
};

const SET_PALLET_LOCATION = 'SET_PALLET_LOCATION';
const setPalletLocation = (palletId, locationId) => {
	return {
		type: SET_PALLET_LOCATION,
		pallet: palletId,
		location: locationId
	};
};

exports.CREATE_PALLET = CREATE_PALLET;
exports.createPallet = createPallet;
exports.SELECT_RACK = SELECT_RACK;
exports.selectRack = selectRack;
exports.SET_PALLET_LOCATION = SET_PALLET_LOCATION;
exports.setPalletLocation = setPalletLocation;
exports.UPDATE_PALLET = UPDATE_PALLET;
exports.updatePallet = updatePallet;