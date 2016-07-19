// imported into inventory.jsx

import {createClass} from 'react';
import {connect} from 'react-redux';

const Type = createClass({
	render: function() {
		return (
			<div className='type' key={this.props.type}>
				display info here for quantities, lots, expirations, and more for each type of product
			</div>
		);
	}
});

const Container = connect()(Type);

module.exports = Container;