// called into rack.jsx

import createClass from 'react';
import connect from 'react-redux';
import Link from 'react-router';

const RackDisplay = createClass({
	render: function() {
		return (
			<div className={this.state.rackId}>
				
			</div>
		);
	}
});

const Container = connect()(RackDisplay);
module.exports = Container;