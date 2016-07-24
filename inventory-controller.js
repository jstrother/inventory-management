const socket_io = require('socket.io');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');

const Pallet = require('./models/pallet.js');
const app = require('./server.js').app;

app.use(bodyParser.json());

const server = http.Server(app);
const io = socket_io(server);

io.on('connection', function(socket) {
	socket.on('get', (crud) => {
		socket.emit('get', get())
	});
	socket.on('post', (crud) => {
		socket.emit('post', post())
	});
	socket.on('put', (crud) => {
		socket.emit('put', put())
	});
	socket.on('del', (crud) => {
		socket.emit('del', del())
	});
});

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

const put = app.put('/inventory-management/:palletId', function(req, res) {
	Pallet.findByIdAndUpdate(palletId, {
		// the only thing that will ever be updated is the quantity
		quantity: req.body.quantity
	}, function(err, pallet) {
		if (err) {
			return res.status(500).json({
				message: "Internal Server Error"
			});
		}
		res.status(201).json(pallet);
	});
});

const del = app.delete('/inventory-management/:palletId', function(req, res) {
	Pallet.findByIdAndRemove(palletId, function(err, pallet) {
		if (err) {
			return res.status(500).json({
				message: "Internal Server Error"
			});
		}
		res.status(201).json(pallet);
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