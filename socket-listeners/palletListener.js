// imported into index.jsx

import io from 'socket.io-client';
const socket = io.connect('/');


export default store => {
	socket.on('pallet:insert', pallet => {
		store.dispatch({
			type: 'pallet:insert',
			pallet
		});
	});
	socket.on('pallet:update', pallet => {
		store.dispatch({
			type: 'pallet:update',
			pallet
		});
	});
	socket.on('pallet:delete', pallet => {
		store.dispatch({
			type: 'pallet:delete',
			pallet
		});
	});
}