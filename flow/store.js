import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers.js';

const store = createStore(reducers, applyMiddleware(thunk));

module.exports = store;