import express from 'express';
import products from './data/products.js';
const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('API Working');
});

app.get('/api/products', (req, res) => {
  res.send(products);
});

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
