// called into rack.jsx

import createClass from 'react';
import connect from 'react-redux';
import Link from 'react-router';

const PalletCreator = createClass({
	onCloseClick: function() {
		this.refs.palletCreator.classList.add('hidden');
	},
	onPalletCreateClick: function() {

	},
	// need labeled inputs to gather needed info (including initial locationId)
	render: function() {
		return (
			<div className='palletCreator' ref='palletCreator'>
				<button className="palletCreator" onClick={this.onPalletCreateClick}>Create Pallet</button>
				<button className="closePalletCreator" onClick={this.onCloseClick} >Close</button>
			</div>
		)
	}
});

const Container = connect()(PalletCreator);

module.exports = Container;