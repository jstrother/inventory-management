// imported into rack.jsx

import React from 'react';
import {connect} from 'react-redux';

import Type from './type.jsx';

const Inventory = React.createClass({
	render: function() {
		return (
			<div className='inventory'>
				<Type />
			</div>
		)
	}
});

const Container = connect()(Inventory);

module.exports = Container;