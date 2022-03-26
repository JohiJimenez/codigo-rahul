// MongoDb
require('dotenv').config();
const { mongoose } = require('mongoose');

// connección a la base de datos
mongoose.connect(
	process.env.MONGOURL,
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

class MongoContainer {
	constructor(model) {
		this.model = model;
	}

	async getAll() {
		return await this.model.find();
	}

	async addProduct(product) {
		return await this.model.create(product);
	}
}


module.exports = MongoContainer;
