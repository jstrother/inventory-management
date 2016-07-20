import express from 'express';
import {static} from 'express';
import http from 'http';
import socket_io from 'socket.io'
import bodyParser from 'body-parser';
import port from './ports.js';

const jsonParser = bodyParser.json();

// creates a single instance of Inventory
const Inventory = function() {};

Inventory.prototype.createPallet = (type, expire, lot, numCases, numPops, numBars, country) => {
	function Pallet(type, expire, lot, numCases, numPops, numBars, country) {
		this.type = type;
		this.expire = expire;
		this.lot = lot;
		this.numCases = numCases;
		this.numPops = numPops;
		this.numBars = numBars;
		this.country = country;
	}

// creates a pallet with unique ID
};

Inventory.prototype.setLocation = (inputs) => {
// this method will add a pallet to a location, and remove it from a previous one if needed
};

Inventory.prototype.selectRack = (inputs) => {

};

let locations = [];
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

for (i = 0; i < number; i++) {
	locationSetter(number, modulo);
	let locationId = (`${rack}-${location}`);
	locations.push(locationId);
};

const locationSetter = (number, modulo) => {
	for (i = 0; i <= number; i++) {
		if (i % modulo === 0) {
			let rowTotal = i;
			for (j = 0; j <= rowTotal; j++) {
				if (j <= modulo) {
					location = `A${j}`;
				}
				else if (j > modulo * 2) {
					location = `C${j - (modulo * 2)}`;
				}
				else {
					location = `B${j - modulo}`;
				}
			};
		}
	};
};

const inventory = new Inventory();

const app = express();
app.use('/inventory', static('public'));

const server = http.Server(app);
const io = socket_io(server);

io.on('connection', function(socket) {
	console.log('client connected');
	socket.on('action', (action) => {
		switch (action.type) {
			case 'SELECT_RACK':
				break;
			case 'SET_PALLET_LOCATION':
				break;
			case 'CREATE_PALLET':
				break;
		};
	});
});

server.listen(port);