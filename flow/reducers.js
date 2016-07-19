// called into store.js

import {combineReducers} from 'redux';
import actions from './actions.js';

const initialState = {};
let state = state || initialState;

const reducers = combineReducers({
	setLocation: setPalletLocationReducer,
	selectRack: selectRackReducer
});

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