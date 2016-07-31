// imported into index.jsx

import io from 'socket.io-client';
const socket = io.connect('/');

export default store => {
	socket.on('products:insert', products => {
		store.dispatch({
			type: 'products:insert',
			products
		});
	});
	socket.on('products:update', products => {
		store.dispatch({
			type: 'products:update',
			products
		});
	});
	socket.on('products:delete', products => {
		store.dispatch({
			type: 'products:delete',
			products
		});
	});
}