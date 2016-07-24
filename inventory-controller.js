const socket_io = require('socket.io');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Pallet = require('./models/pallet.js');
const app = require('./server.js').app;

const get = app.get('/inventory-management', function(req, res) {
	Pallet.find(function(err, pallets) {
		if (err) {
			return res.status(500).json({
				message: 'Internal Server Error'
			});
		}
		res.json(pallets);
	});
});

const post = app.post('/inventory-management', function(req, res) {
	Pallet.create({
		type: req.body.type,
		lot: req.body.lot,
		expire: req.body.expire,
		country: req.body.country,
		quantity: req.body.quantity
	}, function(err, pallet) {
		if (err) {
			return res.status(500).json({
				message: 'Internal Server Error'
			});
		}
		res.status(201).json(pallet);
	});
});

const put = app.put('/inventory-management', function(req, res) {
	Pallet.update({

	});
});

const del = app.delete('/inventory-management', function(req, res) {
	Pallet.delete({

	});
});

const use = app.use('*', function(req, res) {
	res.status(404).json({
		message: 'Not Found'
	});
});

exports.get = get;
exports.post = post;
exports.put = put;
exports.del = del;
exports.use = use;