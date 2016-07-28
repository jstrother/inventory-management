// called into rack.jsx

import createClass from 'react';
import connect from 'react-redux';

const Location = createClass({
	render: function() {
		return (
			<div className='location' key={this.props.locationId} >
				<h3>Type: {this.props.type}</h3>
				<h5>Lot: {this.props.lot}</h5>
				<h5>Expiration: {this.props.expire}</h5>
				<h5>Country: {this.props.country}</h5>
				<h5>Quantity: {this.props.quantity}</h5>
			</div>
		);
	}
});

const Container = connect()(Location);

module.exports = Container;