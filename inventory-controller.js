const socket_io = require('socket.io');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');

const Pallet = require('./models/pallet.js');
const app = require('./server.js').app;

const server = http.Server(app);
const io = socket_io(server);

io.on('connection', function(socket) {
	socket.on('get', (crud) => {
		// do something then emit it below
		socket.broadcast.emit('get', get()
			// wrap in anon function, use this as pattern for others
			// look for socket status method
		// 	Pallet.find(function(err, pallets) {
		// 	if (err) {
		// 		return res.status(500).json({
		// 			message: 'Internal Server Error'
		// 		});
		// 	}
		// 	res.json(pallets);
		// });
		)
	});
	socket.on('post', (crud) => {
		// do something then emit it below
		socket.broadcast.emit('post', post()
			// Pallet.create({
			// 	type: req.body.type,
			// 	lot: req.body.lot,
			// 	expire: req.body.expire,
			// 	country: req.body.country,
			// 	quantity: req.body.quantity
			// }, function(err, pallet) {
			// 	if (err) {
			// 		return res.status(500).json({
			// 			message: 'Internal Server Error'
			// 		});
			// 	}
			// 	res.status(201).json(pallet);
			// });
		)
	});
	socket.on('put', (crud) => {
		// do something then emit it below
		socket.broadcast.emit('put', put()
			// Pallet.findByIdAndUpdate(palletId, {
			// 	// the only thing that will ever be updated is the quantity
			// 	quantity: req.body.quantity
			// }, function(err, pallet) {
			// 	if (err) {
			// 		return res.status(500).json({
			// 			message: "Internal Server Error"
			// 		});
			// 	}
			// 	res.status(201).json(pallet);
			// });
		)
	});
	socket.on('del', (crud) => {
		// do something then emit it below
		socket.broadcast.emit('del', del()
			// Pallet.findByIdAndRemove(palletId, function(err, pallet) {
			// 	if (err) {
			// 		return res.status(500).json({
			// 			message: "Internal Server Error"
			// 		});
			// 	}
			// 	res.status(201).json(pallet);
			// });
		)
	});
});