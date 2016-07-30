import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import io from 'socket.io-client';
const socket = io.connect('/inventory');

export default class Total extends React.Component {
	handleUpdate(total) {
		socket.emit('totals:update', {
			// info for updating total and/or locations of product
		});
	};
	handleDelete(total) {
		socket.emit('totals:delete', {
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