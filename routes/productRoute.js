const express = require('express');
const { productDao } = require('../daos');

const router = express.Router();

router.get('/product', async (req, res) => {
	const product = await productDao.getAll();
	res.json({
		product,
		message: 'producto que funciona',
	});
});

router.post('/product', async (req, res) => {
	const product = req.body;
	const newProduct = await productDao.addProduct(product);
	res.json({
		newProduct,
		message: 'producto creado',
	});
});

module.exports = router;
