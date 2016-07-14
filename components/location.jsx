// called into rack.jsx

import React from 'react';
import {connect} from 'react-redux';

import Pallet from './pallet.jsx';

const Location = React.createClass({
	render: function() {
		return {

		};
	}
});

const Container = connect()(Location);

module.exports = Container;