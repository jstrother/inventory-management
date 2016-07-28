// called into store.js

import actions from './actions.js';

const initialState = {};
let state = state || initialState;

const reducers = (state, action) => {
	switch (action.type) {
		case 'CREATE_PALLET':
			return {
				// code to change state concerning creating pallets
			};
			break;

		case 'SET_PALLET_LOCATION':
			return {
				// code to change state concerning setting locations
			};
			break;

		case 'SELECT_RACK':
			return {
				// code to change state concerning selecting the rack
			};
			break;

		case 'UPDATE_PALLET':
			return {
				// code to change state concerning updating the pallet's quantity
			};
			break;
	};
};

exports.reducers = reducers;