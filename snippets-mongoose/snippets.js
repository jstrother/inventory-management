import mongoose from 'mongoose';
import {PORT} from './config.js';

mongoose.connect(port);

mongoose.connection.on('error', function(err) {
	console.error('Could not connect. Error:', err);
});

mongoose.connection.once('open', function() {
	let palletSchema = mongoose.Schema({
		type: String,
		lot: Number,
		expire: String,
		country: String,
		quantity: String
	});
	let Snippet = mongoose.model('Snippet', palletSchema);
});

// data ok to be sent via sockets

exports.snippets = Snippet;