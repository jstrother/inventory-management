import mongoose from 'mongoose';

let palletSchema = mongoose.Schema({
	type: {type: String, required: true},
	lot: {type: Number, required: true},
	expire: {type: String, required: true},
	country: {type: String, required: true},
	quantity: {type: String, required: true}
});
let Pallet = mongoose.model('Pallet', palletSchema);

module.exports = Pallet;