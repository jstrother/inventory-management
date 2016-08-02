// imported into pallet.jsx

import React from 'react';
import Popover from 'material-ui/Popover';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import io from 'socket.io-client';
const socket = io.connect('/');

export default class AddPallet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {open: false};
	};
	pallet() {
		return ({
			pallet: {
				type: this.props.refs.type.value.toUpperCase(),
				lot: this.props.refs.lot.value,
				expiration: this.props.refs.expiration.value,
				numCases: this.props.refs.numCases.value,
				numPops: this.props.refs.numPops.value,
				numBars: this.props.refs.numBars.value,
				country: this.props.refs.country.value.toUpperCase(),
				locationId: this.props.refs.locationId.value.toUpperCase()
			}
		});
	};
	// handleKeyDown(input) {

	// };
	handleInsert(pallet) {
		socket.emit('pallet:client:insert', pallet => {
			pallet: pallet
		});
		this.handlePopoverClose();
	};
	handlePopoverTap = event => {
		this.setState({
			open: true,
			anchor: event.currentTarget
		});
	};
	handlePopoverClose = () => {
		this.setState({
			open: false
		});
	};
	render() {
		{console.log('add-pallet.jsx')}
		return (
			<div>
				<RaisedButton onTouchTap={this.handlePopoverTap} style={{position: 'absolute'}} label='Add New Pallet'>
					<ContentAdd />
				</RaisedButton>
				<Popover
					ref='addPallet'
					open={this.state.open}
					anchorEl={this.state.anchor}
					anchorOrigin={{
						horizontal: 'right',
						vertical: 'top'
					}}
					targetOrigin={{
						horizontal: 'left',
						vertical: 'bottom'
					}} >
					<TextField
						ref='type'
						style={{
							margin: 20
						}}
						hintText='Enter Type (ie- DSA)'
						errorText='Required Field' />
					<TextField
						ref='lot'
						style={{
							margin: 20
						}}
						hintText='Enter Lot'
						errorText='Required Field' />
					<TextField
						ref='expiration'
						style={{
							margin: 20
						}}
						hintText='Enter Expiration (ie- 07/2017)'
						errorText='Required Field' />
					<TextField
						ref='numCases'
						style={{
							margin: 20
						}}
						hintText='Enter Number of Cases'
						errorText='Required Field' />
					<TextField
						ref='numPops'
						style={{
							margin: 20
						}}
						hintText='Enter Number of Loose Pops'
						errorText='Required Field' />
					<TextField
						ref='numBars'
						style={{
							margin: 20
						}}
						hintText='Enter Number of Loose Bars'
						errorText='Required Field' />
					<TextField
						ref='country'
						style={{
							margin: 20
						}}
						hintText='Enter Country of Desination'
						errorText='Required Field' />
					<TextField
						ref='locationId'
						style={{
							margin: 20
						}}
						hintText='Enter Location (ie- R1-A1)'
						errorText='Required Field' />
						<RaisedButton onTouchTap={this.handleInsert} style={{position: 'absolute', bottom: 5, right: 5}} label='Create!'>
							<ContentAdd />
						</RaisedButton>
				</Popover>
			</div>
		);
	};
}