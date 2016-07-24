// creates a single instance of Inventory
const Inventory = function() {};

Inventory.prototype.createPallet = (type, expire, lot, numCases, numPops, numBars, country) => {
	this.type = type;
	this.expire = expire;
	this.lot = lot;
	// don't forget to make sure that each of the num variables has appropriate ending (12 case, 1 pop, 5 bar)
	this.quantity = `${numCases}, ${numPops}, ${numBars}`;
	this.country = country;

	return `PLT-${Date}`;
	// creates a pallet with unique ID
};

Inventory.prototype.setLocation = (palletId) => {
	// this method will add a pallet to a location, and remove it from a previous one if needed
	let locations = [];
	let locationId;
	for (i = 0; i < number; i++) {
		locationSetter(number, modulo);
		locationId = `${rack}-${location}`;
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

	this.locationId = locationId;
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

module.exports = Inventory;