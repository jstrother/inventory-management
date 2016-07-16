// called into rack.jsx

import React from 'react';
import {connect} from 'react-redux';

import Pallet from './pallet.jsx';

// don't forget to set pallets to locations via palletId

// locationId will be similar to R1-A1 (Rack1, location A1)

const Location = React.createClass({
	render: function() {
		return (
			<div className='location' key={this.props.locationId}>
				<Pallet
					type
					lot
					expire
					country />
			</div>
		);
	};
});

const Container = connect()(Location);

module.exports = Container;