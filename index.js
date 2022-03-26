// coderDB
// KNcNCqMWqx1uxIO6

const express = require('express');
const productRouter = require('./routes/productRoute');
const app = express();
app.use(express.json());

// prueba
app.get('/', (req, res) => {
	res.send('holaa');
});

app.use('/', productRouter);

// server

app.listen('3000', () => console.log('server started at port 3000'));
