import {applyMiddleware, createStore} from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import port from '../ports.js';

import reducers from './reducers.js';

const socket = io(port);

const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const store = applyMiddleware(socketIoMiddleware)(createStore)(reducers);

module.exports = store;