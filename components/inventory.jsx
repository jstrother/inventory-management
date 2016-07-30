import React from 'react';
import connect from 'react-redux';
import Pallet from './pallet.jsx';
import Totals from './totals.jsx';

class Inventory extends React.Component {
	render() {
		return (
			<div>
				<Pallet
					type
					lot
					expiration
					numCases
					numPops
					numBars
					country
					locationId />
				<Totals />
			</div>
		);
	}
}

function mapStateToProps(Pallet) {
	return {Pallet};
}

export default connect(mapStateToProps)(Inventory);