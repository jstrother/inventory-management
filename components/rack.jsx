// called into index.jsx

import React from 'react';
import {connect} from 'react-redux';
import Link from 'react-router';

import Location from './location.jsx';

const Rack = React.createClass({
	render: function() {
		return {

		};
	}
});

const mapStateToProps = (state, props) => {
	return {};
};

const Container = connect(mapStateToProps)(Rack);

module.exports = Container;