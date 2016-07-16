import {applyMiddleware, createStore} from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers.js';

const socket = io('http://localhost:8080');

const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
// do i need the following or do i use reducers imported above?
function reducer(state = {}, action) {
	switch(action.type) {
		case 'message':
			return Object.assign({}, {message: action.data});
		default:
			return state;
	}
}

const store = createStore(reducers, applyMiddleware(thunk));

module.exports = store;