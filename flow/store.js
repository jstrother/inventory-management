import {applyMiddleware, createStore} from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import createLogger from 'redux-logger';
import PORT from '../config.js';
import reducers from './reducers.js';
console.log(reducers);
const logger = createLogger();

const socket = io(PORT);

const socketIoMiddleware = createSocketIoMiddleware(socket, "inventory-management/");

const store = applyMiddleware(socketIoMiddleware, logger)(createStore)(reducers.reducers);

store.subscribe(() => {
	store.getState();
});

module.exports = store;