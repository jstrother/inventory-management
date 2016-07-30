import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import io from 'socket.io-client';
const socket = io.connect('/inventory');

export default class Products extends React.Component {
	handleDelete(products) {
		socket.emit('products:delete', {
			// info for deleting products upon discontinuation
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
	};
}