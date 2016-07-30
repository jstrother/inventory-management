const express = require('express');
const static = express.static;
const app = express();
const server = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(server);
const r = require('rethinkdb');
const changefeedSocketEvents = require('./socket-events.js');

app.get('*', (req, res) => {
	res.sendFile(path.join(`${__dirname}/index.html`));
});

r.connect({db: 'inventory'})
	.then(connection => {
		io.on('connection', socket => {
			socket.on('inventory:client:insert', pallet => {
				r.table('pallet').insert(pallet).run(connection);
			});
			socket.on('inventory:client:update', pallet => {
				let id = pallet.id;
				delete pallet.id;
				r.table('pallet').get(id).update().run(connection);
			});
			socket.on('inventory:client:delete', pallet => {
				let id = pallet.id;
				delete pallet.id;
				r.table('pallet').get(id).delete().run(connection);
			});
			r.table('pallet').changes({
				includeInitial: true,
				squash: true
			})
			.run(connection)
			.then(changefeedSocketEvents(socket, 'pallet'));
		});
		server.listen(9000);
	})
	.error(error => {
		console.log('Error connecting to database', error);
	});