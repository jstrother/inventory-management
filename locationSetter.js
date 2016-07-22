let locationCreator = (number, modulo) => {
	let locations = [];
	let locationId = [];
	for (let i = 0; i < number; i++) {
		let location = locationSetter(number, modulo);
		// don't forget to change R1 back to ${rack} before copying back to rack.jsx
		for (let j = 0; j < modulo; j++) {
			locationId.push(`R1-${location}`);
		}
		locations.push(locationId);
	}
	return locations;
}

let locationSetter = (number, modulo) => {
	let locations = [];
	let numRows = (number / modulo);  //should be 3 for our example
	let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').slice(0, numRows);
	for (let i = 1; i <= modulo; i++) {
		alphabet.forEach((letter) => {
			locations.push(`${rack}-${letter}${i}`);
		});
	}
	return locations;
};