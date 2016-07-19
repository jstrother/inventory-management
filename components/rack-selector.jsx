// called into rack.jsx

import React from 'react';
import {connect} from 'react-redux';
import Link from 'react-router';

const RackSelector = React.createClass({
	onRackSelectClick: function(event) {
		event.preventDefault();
		this.props.onRackSelectClick(this.refs.rackSelector.value);
	},
	render: function() {
		return(
			<select ref='rackSelector'>
				<option value="rack1">Rack 1</option>
				<option value="rack2">Rack 2</option>
				<option value="rack3">Rack 3</option>
				<option value="rack4">Rack 4</option>
				<option value="canadaRack">Canada</option>
			</select>
			<button onClick={this.onRackSelectClick}>Select</button>
		);
	}
});



				