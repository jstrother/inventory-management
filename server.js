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
const grandTotal = require('./grand-total-function.js');

const Inventory = function() {};

Inventory.prototype.createPallet = (type, expire, lot, numCases, numPops, numBars, country) => {
	this.type = type;
	this.expire = expire;
	this.lot = lot;
	this.numCases = numCases;
	this.numPops = numPops;
	this.numBars = numBars;
	this.country = country;

	grandTotal(type, numCases, numPops, numBars);

	return `PLT-${Date}`;
	// creates a pallet with unique ID
};

Inventory.prototype.setLocation = (palletId, locationId) => {
	if (this.palletId === palletId) {
		this.locationId = locationId;
	}
};

// do I even need this method if rack-selector.jsx has the same function?
Inventory.prototype.selectRack = (rackId) => {
	// this method selects individual racks by ID

	let number, modulo, rack, location;
	switch (rackId) {
		case 'rack1':
			number = 54;
			modulo = 18;
			rack = 'R1';
			break;
		case 'rack2':
			number = 48;
			modulo = 16;
			rack = 'R2';
			break;
		case 'rack3':
			number = 32;
			modulo = 10;
			rack = 'R3';
			break;
		case 'rack4':
			number = 36;
			modulo = 12;
			rack = 'R4';
			break;
		case 'canadaRack':
			number = 9;
			modulo = 3;
			rack = 'Canada';
			break;
	}
	this.rackId = rackId;
};

Inventory.prototype.updatePallet = (palletId, numCases, numPops, numBars) => {
	if (this.palletId === palletId) {
		if (this.numCases != 0 || this.numPops != 0 || this.numBars != 0) {
			this.numCases = numCases;
			this.numPops = numPops;
			this.numBars = numBars;
		}
		else if (this.numCases === 0 && this.numPops === 0 && this.numBars === 0) {
			this.deletePallet;
		}
	}
};

Inventory.prototype.deletePallet = (palletId) => {
	if (this.palletId === palletId) {
		delete this.type;
		delete this.lot;
		delete this.expire;
		delete this.numCases;
		delete this.numPops;
		delete this.numBars;
		delete this.country;
		delete this.palletId;
	}
};

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