import {applyMiddleware, createStore} from 'redux';
import {createSocketIoMiddleware} from 'redux-socket.io';
import {io} from 'socket.io-client';
import {createLogger} from 'redux-logger';

import port from '../ports.js';
import reducers from './reducers.js';

const logger = createLogger();

const socket = io(port);

const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

// due to the change in middle-ware format, is logger in the correct place? or should it still come at the end?
const store = applyMiddleware(socketIoMiddleware)(logger)(createStore)(reducers);

store.subscribe(() => {
	store.getState();
});

store.dispatch({
	// need to figure out what exactly goes here
});

module.exports = store;