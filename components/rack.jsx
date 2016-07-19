// called into index.jsx

import React from 'react';
import {connect} from 'react-redux';
import Link from 'react-router';

import Location from './location.jsx';
import RackSelector from './rack-selector.jsx';
import {fetchInventory} from '../flow/actions.js';

// Note about rack.length: each rackId will have a corresponding number of locations needed.  should it be passed through props?  i think so, but i'm not too sure

// rack1 needs 18 locations across three levels for 54 total
// rack2 needs 16 locations across three levels for 48 total
// rack3 needs 10 locations across three levels, plus 2 additional at spots 9 and 10, for 32 total
// rack4 needs 12 locations across three levels for 36 total
// canada needs a total of 9 (3 locations on each of 3 levels)

// getting an error thrown on the for loop - doesn't like for
const Rack = React.createClass({
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

		for (i=0; i<rack.length; i++) {
			locations.push(
				<Location
					key={`${rackId}_${i}`}
					type={this.props.type},
					lot={this.props.lot},
					expire{this.props.expire},
					country={this.props.country},
					palletId={this.props.palletId},
					locationId={this.props.locationId}
				/>
			);
		};

		return (
			<div className='rack' key={rackId}>
				<RackSelector />
				{locations}
			</div>
		);
	};
});

const mapStateToProps = (state, props) => {
	return {
		type: state.type,
		lot: state.lot,
		expire: state.expire,
		country: state.country,
		palletId: state.palletId,
		locationId: state.locationId,
		rackId: state.rackId
	};
};

const Container = connect(mapStateToProps)(Rack);

module.exports = Container;