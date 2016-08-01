// top-level of back-end

const express = require('express');
const static = express.static;
const app = express();
const server = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(server);
const r = require('rethinkdb');
const changefeedSocketEvents = require('./socket-events.js');
const SERVER_PORT = require('./config.js').SERVER_PORT;
const DATABASE_URL = require('./config.js').DATABASE_URL;

app.use(static('public'));

app.get('*', (req, res) => {
	res.sendFile(path.join(`${__dirname}/public/index.html`));
});

r.connect({
	host: 'localhost',
	port: 28015,
	db: 'inventory'})
	.then(connection => {
		console.log('connected to rethinkDB');
		io.on('connection', socket => {
			// r.table('pallet').indexList().run(connection).then(data => {
			// 		socket.emit('pallet:data', data);
			// 	});
			// sockets listening for all changes from the front-end
			socket.on('pallet:client:insert', pallet => {
				console.log(pallet);
				r.table('pallet').insert(pallet).run(connection);
			});
			socket.on('pallet:client:update', pallet => {
				let id = pallet.id;
				delete pallet.id;
				r.table('pallet').get(id).update().run(connection);
			});
			socket.on('pallet:client:delete', pallet => {
				let id = pallet.id;
				delete pallet.id;
				r.table('pallet').get(id).delete().run(connection);
			});
			socket.on('products:client:insert', products => {
				r.table('products').insert(products).run(connection);
			});
			socket.on('products:client:update', products => {
				let id = products.id;
				delete products.id;
				r.table('products').get(id).update().run(connection);
			});
			socket.on('products:client:delete', products => {
				let id = products.id;
				delete products.id;
				r.table('products').get(id).delete().run(connection);
			});
			// 2 functions to listen for changes, then uses changefeedSocketEvents to push changes thru to front-end
			r.table('pallet').changes({
				includeInitial: true,
				includeStates: true,
				squash: true
			})
			.run(connection)
			.then(changefeedSocketEvents(socket, 'pallet'));
			r.table('products').changes({
				includeInitial: true,
				includeStates: true,
				squash: true
			})
			.run(connection)
			.then(changefeedSocketEvents(socket, 'products'));
		});
		server.listen(SERVER_PORT);
	})
	.error(error => {
		console.log('Error connecting to database', error);
	});

// the following function is being saved to eventually be used in helping determine location names without having to hard-code them in. it allows for growth of the warehouse over time. i saved it from my earlier version of this project because it's elegant and it works.
// const locationSetter = (number, modulo) => {
// 	let locations = [];
// 	let numRows = (number / modulo);
// 	let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').splice(0, numRows);
// 	for (let i = 1; i <= modulo; i++) {
// 		alphabet.forEach(letter => {
// 			rows.push(letter + i);
// 			locations.push(`${rack}-${letter}${i}`);
// 		});
// 	}
// 	return locations;
// }

// Many thanks to Scott Hasbrouck for his walk-through that inspired how this project was built- and loaned some of the code and structure. Visit him here: www.scotthasbrouck.com. Or see the original walk-through that gave the inspiration: webapplog.com/reactive-web-stack/ or the github repo for it: https://github.com/scotthasbrouck/3RES-Stack-Sample-App