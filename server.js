const express = require('express');
const static = express.static;
const http = require('http');
const socket_io = require('socket.io');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = require('./config.js').PORT;
const DATABASE_URL = require('./config.js').DATABASE_URL;
const Pallet = require('./models/pallet.js');
const controller = require('./inventory-controller.js');
// use the exports from above to help with sockets sending info back and forth
const Inventory = require('./inventory-constructor.js');

const inventory = new Inventory();

const app = express();
app.use('/inventory', static('public'));

app.use(bodyParser.json());

const server = http.Server(app);
const io = socket_io(server);

const runServer = function(callback) {
	mongoose.connect(DATABASE_URL, function(err) {
		if (err && callback) {
			return callback(err);
		}
		server.listen(PORT, function() {
			console.log(`Listening on localhost: ${PORT}`);
			if (callback) {
				callback();
			}
		});
	});
};

if (require.main === module) {
	runServer(function(err) {
		if (err) {
			console.error(err);
		}
	});
};

io.on('connection', function(socket) {
	console.log('client connected');
	socket.on('action', (action) => {
		switch (action.type) {
			case 'SELECT_RACK':
				socket.emit('rackSelected', function() {
					inventory.selectRack({

					});
				});
				break;
			case 'SET_PALLET_LOCATION':
				socket.emit('locationSet', function() {
					inventory.setLocation({

					});
				});
				break;
			case 'CREATE_PALLET':
				socket.emit('palletCreated', function() {
					inventory.createPallet({

					});
				});
				break;
		};
	});
});

exports.app = app;
exports.runServer = runServer;