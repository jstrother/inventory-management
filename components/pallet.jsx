import React from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import AddPallet from './add-pallet.jsx';
import UpdatePallet from './update-pallet.jsx';
const socket = io.connect('/');

class Pallet extends React.Component {
	handleDelete(pallet) {
		socket.emit('pallet:client:delete', pallet => {
			pallet: pallet
		});
	};
	render() {
		return (
			<div>
					<h3>Type: {this.props.type}</h3>
					<h5>Lot: {this.props.lot}</h5>
					<h5>Expiration: {this.props.expiration}</h5>
					<h5>Quantity: {`${this.props.numCases} cases, ${this.props.numPops} pops, ${this.props.numBars} bars`}</h5>
					<h5>Country: {this.props.country}</h5>
					<h5>Location: {this.props.locationId}</h5>
					<AddPallet />
					<UpdatePallet />
			</div>
		);	
	};
}

export default connect()(Pallet);