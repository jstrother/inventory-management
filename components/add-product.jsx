import React from 'react';

export default class AddProduct extends React.Component {
	handleInsert(total) {
		socket.emit('totals:insert', {
			// info for adding a new product (not pallet)
		});
	};
	render() {
		return (
			<div>

			</div>
		);
	}
}