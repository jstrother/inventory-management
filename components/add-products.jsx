import React from 'react';
import Popover from 'material-ui/Popover';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import io from 'socket.io-client';
const socket = io.connect('/');

export default class AddProducts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {open: false};
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
	handleInsert(products) {
		if (event.keyCode === 13) {
			if (event.target.value && event.target.value.length > 0) {
				socket.emit('products:insert', {
					// info for adding new products (not pallet)
				});
				this.handlePopoverClose();
			}
			else {
				this.setState({
					error: 'Please Enter Products Name'
				});
			}
		}
	};
	render() {
		return (
			<div>
				<Popover
					ref={products}
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
						ref={productsName}
						style={{
							margin: 20
						}}
						hintText='Enter New Products Name'
						errorText={this.state.error}
						onKeyDown={this.handleInsert} />
				</Popover>
			</div>
		);
	};
}