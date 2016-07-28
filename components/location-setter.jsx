// called into rack.jsx

import createClass from 'react';
import connect from 'react-redux';
import Link from 'react-router';

const LocatonSetter = createClass({
	onCloseClick: function() {
		this.refs.locationSetter.classList.add('hidden');
	},
	render: function() {
		let locations = [];
		let number, modulo, rack, locationId;
		// rack1,2,etc. are the rackId's, not the rack variable
		switch (this.state.rackId) {
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
				number = 30;
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
			locations.push(
				<Location
					type={this.props.type}
					lot={this.props.lot}
					expire={this.props.expire}
					country={this.props.country}
					palletId={this.props.palletId}
					quantity={this.props.quantity}
					locationId={locationId}
				/>
			);
		}
		
		const locationSetter = (number, modulo) => {
			let locations = [];
			let numRows = (number / modulo);
			let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').slice(0, numRows);
			for (let i = 1; i <= modulo; i++) {
				alphabet.forEach((letter) => {
					locations.push(`${rack}-${letter}${i}`);
				});
			}
			return locations;
		};

		return (
			<div className='locationSetter' ref='locationSetter'>

				<button className="closeLocationSetter" onClick={this.onCloseClick} >Close</button>
			</div>)	
	}
});

const Container = connect()(LocatonSetter);

module.exports = Container;