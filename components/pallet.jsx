// called into location.jsx

import React from 'react';
import {connect} from 'react-redux';

const Pallet = React.createClass({
	render: function() {
		return {

		};
	}
});

const Container = connect()(Pallet);

module.exports = Container;