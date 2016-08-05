// imported into index.jsx

import React from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import Pallet from './pallet.jsx';
import ProductsList from './productsList.jsx';
const socket = io.connect('/');
window.socket = socket;

class Inventory extends React.Component {
	palletType() {
		return this.props.pallet.type;
	}
	render() {
		{this.state.length > 0 ? <div>Loading...</div> : console.log('palletType', this.palletType())}
		{console.log('pallet from Inventory.jsx', this.props.pallet)}
		{console.log('products from Inventory.jsx', this.props.products)}
		return (
			<div>
				<h1>Theo Inventory Management</h1>
				<Pallet
					pallet={this.props.pallet} />
				<ProductsList
					products={this.props.products} />
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		pallet: state.palletReducer[0],
		products: state.productsReducer[0]
	};
};

// type={this.props.type}
// lot={this.props.lot}
// expiration={this.props.expiration}
// numCases={this.props.numCases}
// numPops={this.props.numPops}
// numBars={this.props.numBars}
// country={this.props.country}
// locationId={this.props.locationId}

// allTypes={this.props.allTypes}
// allNumCases={this.props.allNumCases}
// allNumPops={this.props.allNumPops}
// allNumBars={this.props.allNumBars}
// allLocations={this.props.allLocations}

export default connect(mapStateToProps)(Inventory);