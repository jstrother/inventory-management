import {combineReducers} from 'redux';
import palletReducer from './palletReducer.js';
import productsReducer from './productsReducer.js';

const inventoryReducer = combineReducers({
	palletReducer,
	productsReducer
});

export default inventoryReducer;