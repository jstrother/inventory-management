import express from 'express';
import {static} from 'express';
import http from 'http';
import socket_io from 'socket.io'
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();

const Inventory = function() {

};

const inventory = new Inventory();

const server = http.Server(app);
const io = socket_io(server);

io.on('connection', function(socket) {
	socket.on('', function() {

	});
});

const app = express();
app.use('/inventory', static('public'));

app.get('/inventory', function(request, response) {

});

app.post('/inventory', function(request, response) {

});

app.put('/inventory', function(request, response) {

});

app.delete('/inventory', function(request, response) {

});

app.listen(process.env.PORT || 8080);