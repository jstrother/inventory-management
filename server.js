import express from 'express';
import {static} from 'express';
import http from 'http';
import socket_io from 'socket.io'
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();

const Inventory = function() {

};

const inventory = new Inventory();

const app = express();
app.use('/inventory', static('public'));

const server = http.Server(app);
const io = socket_io(server);

io.on('connection', function(socket) {
	console.log('client connected');
	socket.on('', function() {

	});
});

server.listen(process.env.PORT || 8080);