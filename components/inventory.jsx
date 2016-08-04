// imported into index.jsx

import React from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import Pallet from './pallet.jsx';
import ProductsList from './productsList.jsx';
const socket = io.connect('/');
window.socket = socket;

class Inventory extends React.Component {
	render() {
		{console.log('pallet from Inventory.jsx', this.props.pallet)}
		return (
			<div>
				<h1>Theo Inventory Management</h1>
				<Pallet
					type={this.props.type}
					lot={this.props.lot}
					expiration={this.props.expiration}
					numCases={this.props.numCases}
					numPops={this.props.numPops}
					numBars={this.props.numBars}
					country={this.props.country}
					locationId={this.props.locationId} />
				<ProductsList
					allTypes={this.props.allTypes}
					allNumCases={this.props.allNumCases}
					allNumPops={this.props.allNumPops}
					allNumBars={this.props.allNumBars}
					allLocations={this.props.allLocations} />
			</div>
		);
	};
}

const mapStateToProps = (state, props) => {
	return {
		pallet: JSON.stringify(state.palletReducer[0])
	};
};

export default connect(mapStateToProps)(Inventory);