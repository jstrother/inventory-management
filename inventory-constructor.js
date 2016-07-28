// creates a single instance of Inventory

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

exports.Inventory = Inventory;