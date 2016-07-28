// called into rack.jsx

import createClass from 'react';
import connect from 'react-redux';
import Link from 'react-router';
import Location from './location.jsx';

const RackDisplay = createClass({
	render: function() {
		// use a for loop to display correct number of locations per rackId
		return (
			<div className={this.state.rackId}>
				<Location />
			</div>
		);
	}
});

const Container = connect()(RackDisplay);
module.exports = Container;