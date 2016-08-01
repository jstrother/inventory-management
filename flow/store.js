// imported into index.jsx

import {createStore} from 'redux';
import inventoryReducer from './reducers.js';

export default createStore(inventoryReducer);