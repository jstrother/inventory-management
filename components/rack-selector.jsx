// called into rack.jsx

import createClass from 'react';
import connect from 'react-redux';
import Link from 'react-router';

const RackSelector = createClass({
	onRackSelectClick: function(event) {
		event.preventDefault();
		this.props.onRackSelectClick(this.refs.rackSelector.value);
	},
	render: function() {
		return(
			<div>
				<select ref='rackSelector'>
					<option value="rack1">Rack 1</option>
					<option value="rack2">Rack 2</option>
					<option value="rack3">Rack 3</option>
					<option value="rack4">Rack 4</option>
					<option value="canadaRack">Canada</option>
				</select>
				<button onClick={this.onRackSelectClick}>Select</button>
			</div>
		);
	}
});

const Container = connect()(RackSelector);

module.exports = Container;