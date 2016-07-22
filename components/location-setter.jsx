// called into rack.jsx

import {createClass} from 'react';
import {connect} from 'react-redux';
import Link from 'react-router';

const LocatonSetter = createClass({
	render: function() {
		return (
			<div>
				
				<button className="closeLocationSetter" onClick={this.onCloseClick} >Close</button>
			</div>)	
	}
});

const Container = connect()(LocatonSetter);

module.exports = Container;