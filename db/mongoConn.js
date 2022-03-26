const mongoose = require('mongoose');
// mongodb+srv://coderDB:KNcNCqMWqx1uxIO6@cluster0.paock.mongodb.net/coderDBSab?retryWrites=true&w=majority

const databsetouse = 'mongo';

let db;
async function connectWithMongo() {
	try {
		mongoose.connect(
			'mongodb+srv://coderDB:KNcNCqMWqx1uxIO6@cluster0.paock.mongodb.net/coderDBSab?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);

		db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', () => {
			console.log('connected to mongoDB');
		});
	} catch (error) {
		console.log('cannot establish connection with mongo');
	}
}

module.exports = {
	db,
	connectWithMongo,
};

// 1.
