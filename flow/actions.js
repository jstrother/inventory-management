// called into reducers.js

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

exports.SELECT_RACK = SELECT_RACK;
exports.selectRack = selectRack;
exports.SET_PALLET_LOCATION = SET_PALLET_LOCATION;
exports.setPalletLocation = setPalletLocation;