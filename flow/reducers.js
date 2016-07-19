// called into store.js

import {combineReducers} from 'redux';
import actions from './actions.js';

const initialState = {};
let state = state || initialState;

const reducers = combineReducers({
	newPallet: createPalletReducer,
	setLocation: setPalletLocationReducer,
	selectRack: selectRackReducer
});

const createPalletReducer = (state, action) => {
	switch (action.type) {
		case 'CREATE_PALLET':
			return state.concat({
				// code to change state concerning creating pallets
			})
		default:
			return state
	};
};

const setPalletLocationReducer = (state, action) => {
	switch (action.type) {
		case 'SET_PALLET_LOCATION':
			return state.concat({
				// code to change state concerning setting locations
			})
		default:
			return state
	}; 
};

const selectRackReducer = (state, action) => {
	switch (action.type) {
		case 'SELECT_RACK':
			return state.concat({
				// code to change state concerning selecting the rack
			})
		default:
			return state
	};
};

exports.reducers = reducers;