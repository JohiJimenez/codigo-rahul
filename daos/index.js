const MongoProductDao = require('./mongoProductDao');
const fsProducts = require('./fsProducts')

const dbToUse = 'fs';

let productDao;

switch (dbToUse) {
	case 'mongo':
		productDao = new MongoProductDao();
		break;
	case 'fs':
		productDao = new fsProducts();
		break;
	default:
		break;
}

module.exports = productDao;