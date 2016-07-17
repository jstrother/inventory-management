import express from 'express';
import {static} from 'express';
import http from 'http';
import socket_io from 'socket.io'
import bodyParser from 'body-parser';
import port from './ports.js';

const jsonParser = bodyParser.json();

const Inventory = function() {

};

Inventory.prototype.createPallet = (inputs) => {
// inputs should equal:
// 1. type
// 2. expiration
// 3. destination country (usa or canada)
// 4. lot number
// 5. number of cases
// 6. number of pops (if necessary)
// 7. number of bars (if necessary)
// creates a pallet with unique ID
};

Inventory.prototype.setLocation = (inputs) => {
// this method will add a pallet to a location, and remove it from a previous one if needed
};

const inventory = new Inventory();

const app = express();
app.use('/inventory', static('public'));

const server = http.Server(app);
const io = socket_io(server);

io.on('connection', function(socket) {
	console.log('client connected');
	socket.on('', function() {

	});
});

server.listen(port);