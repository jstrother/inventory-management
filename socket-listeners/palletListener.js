// imported into index.jsx

import io from 'socket.io-client';
const socket = io.connect('/');

export default store => {
	store.subscribe(
		socket.on('pallet:insert', pallet => {
			store.dispatch({
				type: 'pallet:insert',
				pallet: pallet
			});
		})
	);	
	store.subscribe(
		socket.on('pallet:update', pallet => {
			store.dispatch({
				type: 'pallet:update',
				pallet: pallet
			});
		})
	);
	store.subscribe(
		socket.on('pallet:delete', pallet => {
			store.dispatch({
				type: 'pallet:delete',
				pallet: pallet
			});
		})
	);
}