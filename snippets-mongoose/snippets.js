import mongoose from 'mongoose';
import port from '../ports.js';

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

// do i need these CRUD functions?
let create = (name, content) => {
	let snippet = {
		type,
		lot,
		expire,
		country,
		quantity
	};
	Snippet.create(snippet, function(err, snippet) {
		if (err || !snippet) {
			console.error('Could not create snippet', name);
			mongoose.disconnect();
			return;
		}
		console.log('Created snippet', snippet.name);
		mongoose.disconnect();
	});
};

let read = (name) => {
	Snippet.findOne({name}, function(err, snippet) {
		if (err || !snippet) {
			console.error('Could not read snippet', name);
			mongoose.disconnect();
			return;
		}
		console.log('Read snippet', snippet.name);
		console.log(snippet.content);
		mongoose.disconnect();
	});
};

let update = (name, content) => {
	Snippet.findOneAndUpdate({name}, {content}, function(err, snippet) {
		if (err || !snippet) {
			console.error('Could not update snippet', name);
			mongoose.disconnect();
			return;
		}
		console.log('Updated snippet', snippet.name);
		mongoose.disconnect();
	});
};

let del = (name, content) => {
	Snippet.findOneAndRemove({name}, function(err, snippet) {
		if (err || !snippet) {
			console.error('Could not delete snippet', name);
			mongoose.disconnect();
			return;
		}
		console.log('Deleted snippet', snippet.name);
		mongoose.disconnect();
	});
};