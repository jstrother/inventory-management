import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import io from 'socket.io-client';
const socket = io.connect('/inventory');

export default class product extends React.Component {
	handleUpdate(product) {
		socket.emit('products:update', {
			// info for updating product and/or locations of product
		});
	};
	handleDelete(product) {
		socket.emit('products:delete', {
			// info for deleting a product upon discontinuation
		});
	};
	// need buttons for each of the above
	render() {
		return (
			<TableRow>
				<TableRowColumn>

				</TableRowColumn>
			</TableRow>
		);
	}
}