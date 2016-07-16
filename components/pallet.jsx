// called into location.jsx

import React from 'react';
import {connect} from 'react-redux';

const Pallet = React.createClass({
	render: function() {
		return (
			<div className='pallet'>
				<h3>Type: {this.props.type}</h3>
				<h5>Lot: {this.props.lot}</h5>
				<h5>Expiration: {this.props.expire}</h5>
				<h5>Country: {this.props.country}</h5>
			</div>
		);
	}
});

const Container = connect()(Pallet);

module.exports = Container;