// imported into store.js

import {combineReducers} from 'redux';
import palletReducer from './palletReducer.js';
import productsReducer from './productsReducer.js';

const initialState = [];

const reducer = combineReducers({
	palletReducer,
	productsReducer
	},
	initialState
);

export default reducer;