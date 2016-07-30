import React from 'react';
import Popover from 'material-ui/Popover';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import io from 'socket.io-client';
const socket = io.connect('/');

export default class UpdateProducts extends React.Components {
	constructor(props) {
		super(props);
		this.state = {open: false};
	};
	handleUpdate(products) {
		socket.emit('products:update', {
			// info for updating products and/or locations of products
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
				<Popover
					ref={updateProducts}
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
						ref={numCasesUpdate}
						style={{
							margin: 20
						}}
						hintText='Enter New Number of Cases'
						errorText={this.state.error}
						onKeyDown={this.handleInsert} />
					<TextField
						ref={numPopsUpdate}
						style={{
							margin: 20
						}}
						hintText='Enter New Number of Loose Pops'
						errorText={this.state.error}
						onKeyDown={this.handleInsert} />
					<TextField
						ref={numBarsUpdate}
						style={{
							margin: 20
						}}
						hintText='Enter New Number of Loose Bars'
						errorText={this.state.error}
						onKeyDown={this.handleInsert} />
					<TextField
						ref={locationIdUpdate}
						style={{
							margin: 20
						}}
						hintText='Enter New Location'
						errorText={this.state.error}
						onKeyDown={this.handleInsert} />
				</Popover>
			</div>
		);
	}
}