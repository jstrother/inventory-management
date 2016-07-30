import {combineReducers} from 'redux';
import palletReducer from './palletReducer.js';
import productReducer from './productReducer.js';

const inventoryReducer = combineReducers({
	palletReducer,
	productReducer
});

export default inventoryReducer;