const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductsSchema = new Schema({
	name: String, // String is shorthand for {type: String}
	img: String,
	stock: Number,
	price: Number,
});

const Product = mongoose.model('Product', ProductsSchema);

module.exports = Product;
