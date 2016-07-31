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
	handleInsert(pallet) {
		socket.emit('pallet:client:insert', pallet => {
			pallet: pallet
		});
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
					}}
					onRequestClose={this.handlePopoverClose} >
					<TextField
						ref='type'
						style={{
							margin: 20
						}}
						hintText='Enter New Pallet Type'
						errorText={this.state.error}
						onKeyDown={this.handleInsert} />
					<TextField
						ref='lot'
						style={{
							margin: 20
						}}
						hintText='Enter New Pallet Lot'
						errorText={this.state.error}
						onKeyDown={this.handleInsert} />
					<TextField
						ref='expiration'
						style={{
							margin: 20
						}}
						hintText='Enter New Pallet Expiration'
						errorText={this.state.error}
						onKeyDown={this.handleInsert} />
					<TextField
						ref='numCases'
						style={{
							margin: 20
						}}
						hintText='Enter Number of Cases'
						errorText={this.state.error}
						onKeyDown={this.handleInsert} />
					<TextField
						ref='numPops'
						style={{
							margin: 20
						}}
						hintText='Enter Number of Loose Pops'
						errorText={this.state.error}
						onKeyDown={this.handleInsert} />
					<TextField
						ref='numBars'
						style={{
							margin: 20
						}}
						hintText='Enter Number of Loose Bars'
						errorText={this.state.error}
						onKeyDown={this.handleInsert} />
					<TextField
						ref='locationId'
						style={{
							margin: 20
						}}
						hintText='Enter New Pallet Location'
						errorText={this.state.error}
						onKeyDown={this.handleInsert} />
				</Popover>
			</div>
		);
	};
}