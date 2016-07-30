import React from 'react';

export default class Pallet extends React.Component {
	handleInsert(pallet) {
		socket.emit('pallet:insert', pallet => {
			// info for creating new pallet
		})
	};
	handleUpdate(pallet) {
		socket.emit('pallet:update', pallet => {
			// info for updating pallet
		})
	};
	handleDelete(pallet) {
		socket.emit('pallet:delete', pallet => {
			// info for deleting pallet
		})
	};
	// break the above into popover components
	render() {
		return (
			<div>
				
			</div>
		);	
	}
}