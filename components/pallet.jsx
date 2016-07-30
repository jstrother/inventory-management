import React from 'react';
import io from 'socket.io-client';
const socket = io.connect('/');

export default class Pallet extends React.Component {
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
	};
}