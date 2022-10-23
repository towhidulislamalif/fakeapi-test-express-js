const express = require('express');
const cors = require('cors');
const products = require('./data/products.json');
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/products', (req, res) => {
  res.send(products);
});

app.get('/product/:id', (req, res) => {
  const id = req.params.id;
  const item = products.find((pro) => pro.id == id);
  res.send(item);
});

app.get('/categories/:category', (req, res) => {
  const category = req.params.category;
  const categoriesss = products.filter((pro) => pro.category == category);
  res.send(categoriesss);
});

app.listen(port, () => {
  console.log('Example app listening on port', port);
});

module.exports = app;
