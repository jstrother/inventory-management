import mongoose from 'mongoose';
import port from '../ports.js';

// is the port set correctly?
mongoose.connect(port);

mongoose.connection.on('error', function(err) {
	console.error('Could not connect. Error:', err);
});

mongoose.connection.once('open', function() {
	let snippetSchema = mongoose.Schema({
		// setup schema for pallets
	});
	let Snippet = mongoose.model('Snippet', snippetSchema);
});