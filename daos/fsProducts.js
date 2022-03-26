const FsContainer = require('../contenedor/fsContainer');
// const productsPath = '../files/productos.json';
const path = require('path')
const productsPath = path.join('files', 'productos.json')

class FsProductDao {
    productManager = new FsContainer(productsPath);

    async getAll() {
        return await this.productManager.getAll();
    }

    // async addProduct(product) {
    // 	return await this.productManager.addProduct(product);
    // }
}

module.exports = FsProductDao;