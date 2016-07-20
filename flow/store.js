import {applyMiddleware, createStore} from 'redux';
import {createSocketIoMiddleware} from 'redux-socket.io';
import {io} from 'socket.io-client';
import {createLogger} from 'redux-logger';

import port from '../ports.js';
import reducers from './reducers.js';

const logger = createLogger();

const socket = io(port);

const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const store = applyMiddleware(socketIoMiddleware, logger)(createStore)(reducers);

store.subscribe(() => {
	store.getState();
});

store.dispatch({
	// need to figure out what exactly goes here
	
});

module.exports = store;