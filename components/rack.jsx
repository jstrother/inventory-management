// called into index.jsx

import {createClass} from 'react';
import {connect} from 'react-redux';
import Link from 'react-router';

import Location from './location.jsx';
import RackSelector from './rack-selector.jsx';
import {fetchInventory} from '../flow/actions.js';

// rack1 needs 18 locations across three levels for 54 total
// rack2 needs 16 locations across three levels for 48 total
// rack3 needs 10 locations across three levels, plus 2 additional at spots 9 and 10, for 32 total
// rack4 needs 12 locations across three levels for 36 total
// canada needs a total of 9 (3 locations on each of 3 levels)

const Rack = createClass({
	componentDidMount: function() {
		this.props.dispatch(
			fetchInventory(this.refs.rackSelector.value)
		);
	},
	onRackSelectClick: function() {
		this.props.dispatch(this.refs.rackSelector.value);
	},
	render: function() {
		let locations = [];
		let number, modulo, rack, location;
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
			let locationId = (`${rack}-${location}`);
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
		};

		return (
			<div className='rack' key={rackId}>
				<RackSelector />
				{locations}
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
		rackId: state.rackId
	};
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

const Container = connect(mapStateToProps)(Rack);

module.exports = Container;