const MongoContainer = require('../contenedor/mongoContainer');
const Product = require('../models/product');

class MongoProductDao {
	productManager = new MongoContainer(Product);

	async getAll() {
		return await this.productManager.getAll();
	}

	async addProduct(product) {
		return await this.productManager.addProduct(product);
	}
}

module.exports = MongoProductDao; // Singleton
