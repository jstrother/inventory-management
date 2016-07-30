import React from 'react';
import {connect} from 'react-redux';
import Pallet from './pallet.jsx';
import ProductsList from './productsList.jsx';

class Inventory extends React.Component {
	render() {
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
					productsList={this.props.productsList} />
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		type: state.type,
		lot: state.lot,
		expiration: state.expiration,
		numCases: state.numCases,
		numPops: state.numPops,
		numBars: state.numBars,
		country: state.country,
		locationId: state.locationId,
		productsList: state.productsList
	};
};

export default connect(mapStateToProps)(Inventory);