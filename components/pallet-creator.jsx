// called into rack.jsx

import {createClass} from 'react';
import {connect} from 'react-redux';
import Link from 'react-router';

const PalletCreator = createClass({
	render: function() {
		return (
			<div>

				<button className="closePalletCreator" onClick={this.onCloseClick} >Close</button>
			</div>
		)
	}
});

const Container = connect()(PalletCreator);

module.exports = Container;