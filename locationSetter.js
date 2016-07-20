// const locationSetter = (number, modulo) => {
// 	let location = [];
// 	for (i = 0; i <= number; i++) {
// 		if (i % modulo === 0) {
// 			for (j = 0; j <= number; j++) {
// 				if (j <= modulo) {
// 					location.push(`A${j}`);
// 				}
// 				else if (j > modulo * 2) {
// 					location.push(`C${j - (modulo * 2)}`);
// 				}
// 				else {
// 					location.push(`B${j - modulo}`);
// 				}
// 			}
// 		}
// 		return location; 
// 	}
// };

// length of row equals modulo
// a, b, or c prepended to 1 - modulo

let locationSetter = (number, modulo) => {
	let rows = [];
	let numRows = (number / modulo);  //should be 3 for our example
	let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').slice(0, numRows);

	for (i = 1; i <= modulo; i++) {
		alphabet.forEach((letter) => {
			for (i = 0; i < alphabet.length; i++) {
				rows.push(letter, i);
			}
		});
	}
	return rows;
};