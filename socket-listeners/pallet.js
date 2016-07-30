import io from 'socket.io-client';
const socket = io.connect('/');

export default function(store) {
	socket.on('pallet:insert', pallet => {
		store.dispatch({
			type: 'pallet:insert',
			pallet: pallet
		});
	});
	socket.on('pallet:update', pallet => {
		store.dispatch({
			type: 'pallet:update',
			pallet: pallet
		});
	});
	socket.on('pallet.delete', pallet => {
		store.dispatch({
			type: 'pallet:delete',
			pallet: pallet
		});
	});
}