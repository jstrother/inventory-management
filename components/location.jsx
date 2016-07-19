// called into rack.jsx

import React from 'react';
import {connect} from 'react-redux';

import Pallet from './pallet.jsx';

// don't forget to set pallets to locations via palletId

// locationId will be similar to R1-A1 (Rack1, location A1)

const Location = React.createClass({
	render: function() {
		return (
			<div className='location' key={`${this.props.locationId}_${this.props.palletId}`}>				
				<h3>Type: {this.props.type}</h3>
				<h5>Lot: {this.props.lot}</h5>
				<h5>Expiration: {this.props.expire}</h5>
				<h5>Country: {this.props.country}</h5>
			</div>
		);
	};
});

const Container = connect()(Location);

module.exports = Container;