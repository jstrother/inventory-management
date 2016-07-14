import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const thunk = require('redux-thunk').default;

const reducers = require('./reducers.js').reducers;

const store = createStore(reducers, applyMiddleware(thunk));

module.exports = store;