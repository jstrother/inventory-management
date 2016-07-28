// called into index.jsx

import createClass from 'react';
import connect from 'react-redux';
import Link from 'react-router';

import RackSelector from './rack-selector.jsx';
import RackDisplay from './rack-display.jsx';
import LocationSetter from './location-setter.jsx';
import PalletCreator from './pallet-creator.jsx';

const Rack = createClass({
	onRackSelectClick: function() {
		this.props.dispatch('SELECT_RACK', this.refs.rackSelector.value);
	},
	onLocationSetClick: function() {
		this.refs.locationSetter.classList.remove('hidden');
	},
	onPalletCreateClick: function() {
		this.refs.palletCreator.classList.remove('hidden');
	},
	render: function() {
		return (
			<div className='rack' key={rackId}>
				<RackSelector />
				<RackDisplay />
				<LocationSetter />
				<PalletCreator />
				<button className="locationSetter" onClick={this.onLocationSetClick} >Set Pallet Location</button>
				<button className="palletcreator" onClick={this.onPalletCreateClick} >Create New Pallet</button>
			</div>
		);
	}
});

const mapStateToProps = (state, props) => {
	return {
		type: state.type,
		lot: state.lot,
		expire: state.expire,
		country: state.country,
		palletId: state.palletId,
		rackId: state.rackId,
		quantity: state.quantity,
		store: state.store
	};
};

const Container = connect(mapStateToProps)(Rack);

module.exports = Container;