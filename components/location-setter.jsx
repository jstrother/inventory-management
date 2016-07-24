// called into rack.jsx

import {createClass} from 'react';
import {connect} from 'react-redux';
import Link from 'react-router';

const LocatonSetter = createClass({
	onCloseClick: function() {
		this.refs.locationSetter.classList.add('hidden');
	},
	render: function() {
		return (
			<div className='locationSetter' ref='locationSetter'>
				
				<button className="closeLocationSetter" onClick={this.onCloseClick} >Close</button>
			</div>)	
	}
});

const Container = connect()(LocatonSetter);

module.exports = Container;