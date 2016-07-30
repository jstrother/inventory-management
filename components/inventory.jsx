import React from 'react';
import {connect} from 'react-redux';
import Pallet from './pallet.jsx';
import ProductList from './productList.jsx';

class Inventory extends React.Component {
	render() {
		return (
			<div>
				<Pallet
					type={this.props.type}
					lot={this.props.lot}
					expiration={this.props.expiration}
					numCases={this.props.numCases}
					numPops={this.props.numPops}
					numBars={this.props.numBars}
					country={this.props.country}
					locationId={this.props.locationId} />
				<ProductList
					productList={this.props.productList} />
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
		productList: state.productList
	};
};

export default connect(mapStateToProps)(Inventory);