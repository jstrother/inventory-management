// called into index.jsx

import {createClass} from 'react';
import {connect} from 'react-redux';
import Link from 'react-router';

import Location from './location.jsx';
import RackSelector from './rack-selector.jsx';
import LocationSetter from './location-setter.jsx';
import PalletCreator from './pallet-creator.jsx';
import {fetchInventory} from '../flow/actions.js';

const Rack = createClass({
	componentDidMount: function() {
		this.props.dispatch(
			fetchInventory(this.refs.rackSelector.value)
		);
	},
	onRackSelectClick: function() {
		this.props.dispatch(this.refs.rackSelector.value);
	},
	onLocationSetClick: function() {
		this.refs.locationSetter.classList.remove('hidden');
	},
	onPalletCreateClick: function() {
		this.refs.palletCreator.classList.remove('hidden');
	},
	render: function() {
		let locations = [];
		let number, modulo, rack, location;
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
			locations.push(
				<Location
					type={this.props.type}
					lot={this.props.lot}
					expire={this.props.expire}
					country={this.props.country}
					palletId={this.props.palletId}
					locationId={locationId}
				/>
			);
		}

		return (
			<div className='rack' key={rackId}>
				<RackSelector />
				{locations}
				<LocationSetter />
				<PalletCreator />
				<button className="locationSetter" onClick={this.onLocationSetClick} >Set Pallet Location</button>
				<button className="palletcreator" onClick={this.onPalletCreateClick} >Create New Pallet</button>
			</div>
		);
	}
});

let locationSetter = (number, modulo) => {
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

const mapStateToProps = (state, props) => {
	return {
		type: state.type,
		lot: state.lot,
		expire: state.expire,
		country: state.country,
		palletId: state.palletId,
		rackId: state.rackId,
		store: state.store
	};
};

const Container = connect(mapStateToProps)(Rack);

module.exports = Container;