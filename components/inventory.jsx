// imported into rack.jsx

import {createClass} from 'react';
import {connect} from 'react-redux';

// Put the following into a switch statement to display grand totals of each
// Cherry Almond
// Sea Salt
// DSA
// MSA
// Chili
// Toasted Coconut
// 85%
// 70%
// 45%
// Orange
// Mint
// Raspberry
// Ginger
// BRQC
// Salted Toffee
// KC Banana
// KC Almond
// KC Raspberry
// Coconut Curry
// Bread
// Fig Fennel
// Coffee
// Hazelnut Crunch
// Chai
// Almond Butter Cups
// DPBC
// MPBC
// CB - Classic
// CB - Salted Almond
// CB - Mint Milk

const Inventory = createClass({
	render: function() {
		return (
			<div className='inventory'>
				
			</div>
		);
	}
});

const Container = connect()(Inventory);

module.exports = Container;