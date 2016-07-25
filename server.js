const express = require('express');
const static = express.static;
const http = require('http');
const socket_io = require('socket.io');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = require('./config.js').PORT;
const DATABASE_URL = require('./config.js').DATABASE_URL;
const Pallet = require('./models/pallet.js');
// use the exports from above to help with sockets sending info back and forth
const Inventory = require('./inventory-constructor.js');

const inventory = new Inventory();

const app = express();
app.use('/inventory-management', static('public'));
exports.app = app; //sloppy fix
const controller = require('./inventory-controller.js');

app.use(bodyParser.json());

const server = http.Server(app);
const io = socket_io(server);

// where do my broadcast.emits go in the following?
io.on('connection', function(socket) {
	console.log('client connected');
	// the following is the socket interaction with the react front end
	socket.on('action', (action) => {
		switch (action.type) {
			case 'SELECT_RACK':
				socket.emit('rackSelected', function(rackId) {
					inventory.selectRack(rackId);
				});
				break;
			case 'SET_PALLET_LOCATION':
				socket.emit('locationSet', function(palletId) {
					inventory.setLocation(palletId);
				});
				break;
			case 'CREATE_PALLET':
				socket.emit('palletCreated', function(type, expire, lot, numCases, numPops, numBars, country) {
					inventory.createPallet(type, expire, lot, numCases, numPops, numBars, country);
				});
				break;
			case 'UPDATE_PALLET':
				socket.emit('palletUpdated', function(palletId, quantity) {
					inventory.updatePallet(palletId, quantity);
				});
				break;
		};
	});
	socket.on('get', (crud) => {
		socket.broadcast.emit('get', controller.get())
	});
	socket.on('post', (crud) => {
		socket.broadcast.emit('post', controller.post())
	});
	socket.on('put', (crud) => {
		socket.broadcast.emit('put', controller.put())
	});
	socket.on('del', (crud) => {
		socket.broadcast.emit('del', controller.del())
	});	
});

const runServer = function(callback) {
	mongoose.connect(DATABASE_URL, function(err) {
		if (err && callback) {
			return callback(err);
		}
		server.listen(PORT, function() {
			console.log(`Listening on localhost: ${PORT}`);
			if (callback) {
				callback();
			}
		});
	});
};

if (require.main === module) {
	runServer(function(err) {
		if (err) {
			console.error(err);
		}
	});
};

exports.runServer = runServer;