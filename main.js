var Bar = {};
Bar['type'] = function() {
	if (USA) {
		// type if USA
		// ['Cherry Almond', 'Sea Salt', 'DSA', 'MSA', 'Chili', 'TC', '85', '70', '45', 'Orange', 'Mint', 'Ginger', 'Raspberry', 'BRQC', 'Toffee', 'CB Dark', 'CB Almond', 'CB Mint', 'DPBC', 'MPBC', 'ABC', 'KC Almond', 'KC Raspberry', 'KC Banana', 'Quinoa Crunch', '85 Baking', '70 Baking', 'WBR*', 'ECI Coffee*', 'ECI Vanilla*', 'Demeter 65*', 'Fig Fennel*', 'Coffee(f)*']
	} else {
		// type if Canada
		// ['Cherry Almond', 'Sea Salt', 'DSA', 'MSA', 'Chili', 'TC', '85', '70', '45', 'Orange', 'Mint', 'MPBC']
	}
};
Bar['lot'] = function() {
	// add code to take in batch number along with day of month; all lots start 30
	// ie.- 3036426 (starts 30, batch 364, on 26th day of month)
};
Bar['expire'] = function() {
	// add code to set expiration
	// NOTE: different product has different expiration, base off of type
};
Bar['country'] = function() {
	// add code to choose between USA and Canada; determines type available
};
Bar['location'] = function() {
	// add code to set location to specific pop, case, or pallet (depending upon incompletes)
};
Bar['hasParent'] = hasParent();

var Pop = {};
Pop['type'] = bar.type;
Pop['lot'] = bar.lot;
Pop['expire'] = bar.expire;
Pop['country'] = bar.country;
Pop['location'] = bar.location;
Pop['addBar'] = addBar();

var Case = {};
Case['type'] = Pop.type;
Case['lot'] = Pop.lot;
Case['expire'] = Pop.expire;
Case['country'] = Pop.country;
Case['location'] = Pop.location;
Case['size'] = function() {
	// set two arrays: one for small cases and other for large
	// search via 'type' property with if/else
	// set size as appropriate
};
Case['addPop'] = addPop();
Case['addBar'] = addBar();

var Pallet = {};
Pallet['type'] = Case.type;
Pallet['lot'] = Case.lot;
Pallet['expire'] = Case.expire;
Pallet['country'] = Case.country;
Pallet['location'] = Case.location;
Pallet['addCase'] = addCase();
Pallet['addPop'] = addPop();
Pallet['addBar'] = addBar();

function addBar() {
	var numBars = 0;
	if (numBars	< 12) {
		// add code here to count on input (button press or scan or both?)
		// numBars++
		// more code to add incomplete count of bars(less than 12)
		// return numBars;
	} else {
		console.log("Pop full. 12 bars.");
	}
}

function addPop() {
	var numPops = 0;
	if (numPops	< 12) {
		// add code here to count on input (button press or scan or both?)
		// numPops++
		// more code to add incomplete count of pops(less than 12)
		// return numPops;
	} else {
		console.log("Case full. 12 pops.");
	}
}

function addCase() {
	var numCases = 0;
	if (Case.size === small) {
		if (numCases	< 96) {
			// add code here to count on input (button press or scan or both?)
			// numCases++
			// more code to add incomplete count of cases(less than 96)
			// return numCases;
		} else {
			console.log("Pallet full. 96 cases.");
		}
	} else {
		if (numCases	< 56) {
			// add code here to count on input (button press or scan or both?)
			// numCases++
			// more code to add incomplete count of cases(less than 56)
			// return numCases;
		} else {
			console.log("Pallet full. 56 cases.");
		}
	}
}