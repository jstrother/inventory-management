// imported into index.jsx

import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers.js';
import createLogger from 'redux-logger';

const logger = createLogger();

export default createStore(reducer, applyMiddleware(logger));