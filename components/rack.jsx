// called into index.jsx

import React from 'react';
import {connect} from 'react-redux';
import Link from 'react-router';

import Location from './location.jsx';

// Note about rack.length: each rackId will have a corresponding number of locations needed.  should it be passed through props?  i think so, but i'm not too sure

// rack1 needs 18 locations across three levels for 54 total
// rack2 needs 16 locations across three levels for 48 total
// rack3 needs 10 locations across three levels, plus 2 additional at spots 9 and 10, for 32 total
// rack4 needs 12 locations across three levels for 36 total
// canada needs a total of 9 (3 locations on each of 3 levels)


// getting an error thrown on the for loop - doesn't like for
const Rack = React.createClass({
	render: function() {
		return (
			<div className='rack' key={rackId}>
				{for (i=0; i<rack.length; i++) {
					<Location
						type
						lot
						expire
						country
						palletId
						locationId />
				}}
			</div>
		);
	};
});

const mapStateToProps = (state, props) => {
	return {
		type: state.type,
		lot: state.lot,
		expire: state.expire,
		country: state.country,
		palletId: state.palletId,
		locationId: state.locationId
		// not entirely sure if i need to map palletId and locationId
	};
};

const Container = connect(mapStateToProps)(Rack);

module.exports = Container;