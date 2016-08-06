// imported into index.jsx

import React from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import Loader from 'react-loader';
import Pallet from './pallet.jsx';
import ProductsList from './productsList.jsx';
const socket = io.connect('/');
window.socket = socket;

const Inventory = React.createClass({
	getInitialState() {
		return {loaded: false, pallet: null, productsList: null}
	},
	componentDidMount() {
		new Pallet({id: this.props.id}).fetch({
			success: this.onSuccess,
			error: this.onError
		})
		new ProductsList({id: this.props.id}).fetch({
			success: this.onSucess,
			error: this.onError
		})
	},
	onSuccess() {
		this.setState({
			pallet: pallet,
			productsList: products,
			loaded: true
		})
	},
	onError() {
		return (
			<div>
				`Uh-oh! Something went wrong! Please report the issue <a href="https://github.com/jstrother/inventory-management/issues">here</a>.`
			</div>)
	},
	render() {
		{console.log('pallet from Inventory.jsx', this.props.pallet)}
		{console.log('products from Inventory.jsx', this.props.products)}
		return (
			<div>
				<h1>Theo Inventory Management</h1>
				<Loader loaded={this.state.loaded}>
					<Pallet
						pallet={this.state.pallet} />
					<ProductsList
						products={this.state.products} />
				</Loader>
			</div>
		);
	}
})

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