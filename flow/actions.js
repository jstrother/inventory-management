// called into reducers.js

const CREATE_PALLET = 'CREATE_PALLET';
const createPallet = () => {
	return {
		type: CREATE_PALLET
	};
};

const SET_PALLET_LOCATION = 'SET_PALLET_LOCATION';
const setPalletLocation = (pallet, location) => {
	return {
		type: SET_PALLET_LOCATION
	};
};

const FETCH_INVENTORY_SUCCESS = 'FETCH_INVENTORY_SUCCESS';
const fetchInventorySuccess = (inventory) => {
	return {
		type: FETCH_INVENTORY_SUCCESS,
		inventory
	};
};

const FETCH_INVENTORY_ERROR = 'FETCH_INVENTORY_ERROR';
const fetchInventoryError = (error) => {
	return {
		type: FETCH_INVENTORY_ERROR,
		error
	};
};

const fetchInventory = (inventory) => {
	return (dispatch) => inventoryFetcher(inventory);
};

exports.CREATE_PALLET = CREATE_PALLET;
exports.createPallet = createPallet;
exports.SET_PALLET_LOCATION = SET_PALLET_LOCATION;
exports.setPalletLocation = setPalletLocation;
exports.FETCH_INVENTORY_SUCCESS = FETCH_INVENTORY_SUCCESS;
exports.FETCH_INVENTORY_ERROR = FETCH_INVENTORY_ERROR;
exports.fetchInventory = fetchInventory;