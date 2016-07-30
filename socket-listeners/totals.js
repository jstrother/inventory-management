import io from 'socket.io-client';
const socket = io.connect('/');

export default store => {
	socket.on('totals:insert', totals => {
		store.dispatch({
			type: 'totals:insert',
			totals
		});
	});
	socket.on('totals:update', totals => {
		store.dispatch({
			type: 'totals:update',
			totals
		});
	});
	socket.on('totals:delete', totals => {
		store.dispatch({
			type: 'totals:delete',
			totals
		});
	});
}