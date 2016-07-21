let locationSetter = (number, modulo) => {
	let rows = [];
	let numRows = (number / modulo);  //should be 3 for our example
	let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').slice(0, numRows);

	for (let i = 1; i <= modulo; i++) {
		alphabet.forEach((letter) => {
			rows.push(letter + i);
		});
	}
	return rows;
};

let locationCreator = (number, modulo) => {
	let locations = [];
	for (i = 0; i < number; i++) {
		let location = locationSetter(number, modulo);
		// don't forget to change R1 back to ${rack} before copying back to rack.jsx
		let locationId = (`R1-${location}`);
		locations.push(locationId);
	}
	return locations;
}